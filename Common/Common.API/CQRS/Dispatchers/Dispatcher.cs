using Common.API.CQRS.Commands;
using Common.API.CQRS.Queries;

namespace Common.API.CQRS.Dispatchers;

/// <summary>
/// Represents a dispatcher that handles the execution of commands and queries.
/// </summary>
/// <remarks>
/// Initializes a new instance of the <see cref="Dispatcher"/> class.
/// </remarks>
/// <param name="commandDispatcher">The command dispatcher.</param>
/// <param name="queryDispatcher">The query dispatcher.</param>
public class Dispatcher(ICommandDispatcher commandDispatcher,
    IQueryDispatcher queryDispatcher) : IDispatcher
{
    private readonly ICommandDispatcher _commandDispatcher = commandDispatcher;
    private readonly IQueryDispatcher _queryDispatcher = queryDispatcher;

    ///inheritdoc/>
    public Task<TResult> SendAsync<TResult>(
        ICommand<TResult> command,
        CancellationToken cancellationToken = default
    )
        => _commandDispatcher.SendAsync(command, cancellationToken);

    ///inheritdoc/>
    public Task<TResult> QueryAsync<TResult>(
        IQuery<TResult> query,
        CancellationToken cancellationToken = default
    )
        => _queryDispatcher.QueryAsync(query, cancellationToken);
}
