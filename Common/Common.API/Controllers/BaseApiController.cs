using Common.API.CQRS.Commands;
using Common.API.CQRS.Dispatchers;
using Common.API.CQRS.Queries;
using Microsoft.AspNetCore.Mvc;
using Common.Interfaces.Pagination;
using Common.Helpers.Pagination;
using Common.API.Extensions;

namespace Common.API.Controllers;

/// <summary>
/// Base class for API controllers.
/// </summary>
/// <remarks>
/// Initializes a new instance of the <see cref="BaseApiController"/> class.
/// </remarks>
/// <param name="dispatcher">The dispatcher used for handling queries and commands.</param>
[ApiController]
[Route("api/[controller]")]
public class BaseApiController(IDispatcher dispatcher) : ControllerBase
{
    protected readonly IDispatcher _dispatcher = dispatcher;

    /// <summary>
    /// Executes a query asynchronously.
    /// </summary>
    /// <typeparam name="TResult">The type of the query result.</typeparam>
    /// <param name="query">The query to execute.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>The result of the query.</returns>
    protected Task<TResult> QueryAsync<TResult>(
        IQuery<TResult> query,
        CancellationToken cancellationToken
    )
        => _dispatcher.QueryAsync(query, cancellationToken);

    /// <summary>
    /// Sends a command asynchronously.
    /// </summary>
    /// <typeparam name="TResult">The type of the command result.</typeparam>
    /// <param name="command">The command to send.</param>
    /// <param name="cancellationToken">The token to monitor for cancellation requests.</param>
    /// <returns>The result of the command.</returns>
    protected Task<TResult> SendAsync<TResult>(
        ICommand<TResult> command,
        CancellationToken cancellationToken = default
    )
        => _dispatcher.SendAsync(command, cancellationToken);

    /// <summary>
    /// Returns a single item as an action result.
    /// </summary>
    /// <typeparam name="T">The type of the item.</typeparam>
    /// <param name="data">The item to return.</param>
    /// <returns>An action result containing the item.</returns>
    protected ActionResult<T> Single<T>(T data)
    {
        if (data == null)
        {
            return NotFound();
        }
        return Ok(data);
    }

    /// <summary>
    /// Returns a collection of items as an action result.
    /// </summary>
    /// <typeparam name="T">The type of the items.</typeparam>
    /// <param name="listResult">The collection of items to return.</param>
    /// <returns>An action result containing the collection of items.</returns>
    protected ActionResult<IEnumerable<T>> Collection<T>(IEnumerable<T> listResult)
    {
        if (listResult == null)
        {
            return NotFound();
        }

        return Ok(listResult);
    }

    /// <summary>
    /// Returns a paged collection of items as an action result.
    /// </summary>
    /// <typeparam name="T">The type of the items.</typeparam>
    /// <param name="listResult">The collection of items to return.</param>
    /// <returns>An action result containing the collection of items.</returns>
    protected ActionResult<PagedList<T>> Collection<T>(IPagedCollection<T> listResult)
    {
        if (listResult == null)
        {
            return NotFound();
        }

        Response.AddPaginationHeader(listResult);

        return Ok(listResult);
    }

    /// <summary>
    /// Returns an action result containing the specified data.
    /// </summary>
    /// <typeparam name="T">The type of the data.</typeparam>
    /// <param name="data">The data to return.</param>
    /// <returns>An action result containing the data.</returns>
    protected ActionResult<T> Action<T>(T data)
    {
        return Ok(data);
    }
}