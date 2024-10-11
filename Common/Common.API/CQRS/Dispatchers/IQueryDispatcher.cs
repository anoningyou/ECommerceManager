using Common.API.CQRS.Queries;

namespace Common.API.CQRS.Dispatchers;

/// <summary>
/// Represents a dispatcher for executing query operations.
/// </summary>
public interface IQueryDispatcher
{
    /// <summary>
    /// Executes the specified query and returns the result asynchronously.
    /// </summary>
    /// <typeparam name="TResult">The type of the query result.</typeparam>
    /// <param name="query">The query to execute.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>A task that represents the asynchronous operation. The task result contains the query result.</returns>
    Task<TResult> QueryAsync<TResult>(
        IQuery<TResult> query,
        CancellationToken cancellationToken = default
    );
}
