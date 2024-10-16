using Common.API.CQRS.Commands;

namespace Common.API.CQRS.Dispatchers;

/// <summary>
/// Represents a dispatcher for executing commands.
/// </summary>
public interface ICommandDispatcher
{
    /// <summary>
    /// Sends a command asynchronously and returns the result.
    /// </summary>
    /// <typeparam name="TResult">The type of the result.</typeparam>
    /// <param name="command">The command to send.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>A task representing the asynchronous operation, containing the result of the command.</returns>
    Task<TResult> SendAsync<TResult>(
        ICommand<TResult> command,
        CancellationToken cancellationToken = default
    );
}
