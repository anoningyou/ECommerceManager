using Common.API.CQRS.Commands;
using Common.API.CQRS.Queries;

namespace Common.API.CQRS.Dispatchers;

/// <summary>
/// Represents a dispatcher that sends commands and queries.
/// </summary>
public interface IDispatcher
{
    /// <summary>
    /// Sends a command and returns the result asynchronously.
    /// </summary>
    /// <typeparam name="TResult">The type of the result.</typeparam>
    /// <param name="command">The command to send.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>A task representing the asynchronous operation, containing the result of the command.</returns>
    Task<TResult> SendAsync<TResult>(
        ICommand<TResult> command,
        CancellationToken cancellationToken = default
    );
    
    /// <summary>
    /// Sends a query and returns the result asynchronously.
    /// </summary>
    /// <typeparam name="TResult">The type of the result.</typeparam>
    /// <param name="query">The query to send.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>A task representing the asynchronous operation, containing the result of the query.</returns>
    Task<TResult> QueryAsync<TResult>(
        IQuery<TResult> command,
        CancellationToken cancellationToken = default
    );
}
