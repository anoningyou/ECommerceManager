using System.Text.Json;
using Autofac;
using Common.API.CQRS.Commands;

namespace Common.API.CQRS.Dispatchers;

/// <summary>
/// Dispatches commands to their corresponding handlers.
/// </summary>
/// <remarks>
/// Initializes a new instance of the <see cref="CommandDispatcher"/> class.
/// </remarks>
/// <param name="context">The component context.</param>
public class CommandDispatcher(IComponentContext context) : ICommandDispatcher
{
    private readonly IComponentContext _context = context;

    ///<inheritdoc/>
    public async Task<TResult> SendAsync<TResult>(
        ICommand<TResult> command,
        CancellationToken cancellationToken = default
    )
    {
        TResult result = default;
        try
        {
            Type handlerType = typeof(ICommandHandler<,>)
                .MakeGenericType(command.GetType(), typeof(TResult));

            dynamic handler = _context.Resolve(handlerType);
            result = await handler.HandleAsync((dynamic)command,cancellationToken);

            if(command is IDisposable commandDisposable)
                commandDisposable.Dispose();

            if (handler is IDisposable disposable)
                disposable.Dispose();
        }
        catch (Exception ex)
        {
            throw new Exception($"{nameof(SendAsync)}\n command: {JsonSerializer.Serialize(command)}\n result:{ex.Message}", ex);
        }
        
        return result;
    }
}
