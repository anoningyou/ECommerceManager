namespace Common.API.CQRS.Queries;

/// <summary>
/// Represents a handler for query objects.
/// </summary>
/// <typeparam name="TQuery">The type of the query object.</typeparam>
/// <typeparam name="TResult">The type of the query result.</typeparam>
public interface IQueryHandler<TQuery, TResult> where TQuery : IQuery<TResult>
{
    /// <summary>
    /// Handles the specified query asynchronously.
    /// </summary>
    /// <param name="query">The query object to handle.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>A task that represents the asynchronous operation and contains the query result.</returns>
    Task<TResult> HandleAsync(
        TQuery query,
        CancellationToken cancellationToken = default
    );
}
