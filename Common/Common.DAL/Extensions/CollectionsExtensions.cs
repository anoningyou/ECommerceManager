using Common.Helpers.Pagination;
using Common.Interfaces.Pagination;
using Microsoft.EntityFrameworkCore;

namespace Common.DAL.Extensions;

/// <summary>
/// Represents the collection extensions class.
/// </summary>
public static class CollectionsExtensions
{
    /// <summary>
    /// Converts the source to a paged list.
    /// </summary>
    /// <typeparam name="T">The type of the source.</typeparam>
    /// <param name="source">The source.</param>
    /// <param name="pageNumber">The page number.</param>
    /// <param name="pageSize">The page size.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    /// <returns>The paged list.</returns>
    public static async Task<PagedList<T>> ToPagedListAsync<T>(
        this IQueryable<T> source,
        int pageNumber,
        int pageSize,
        CancellationToken cancellationToken = default)
    {
        int count = await source.CountAsync(cancellationToken);
        List<T> items = await source
            .Skip((pageNumber-1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);

        return new PagedList<T>(items, count,pageNumber, pageSize);
    }

    /// <summary>
    /// Converts the source to a paged list.
    /// </summary>
    /// <typeparam name="T">The type of the source.</typeparam>
    /// <param name="source">The source.</param>
    /// <param name="paginationParams">The pagination parameters.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    /// <returns>The paged list.</returns>
    public static Task<PagedList<T>> ToPagedListAsync<T>(
        this IQueryable<T> source,
        IPaginationParams paginationParams,
        CancellationToken cancellationToken = default)
    {
        return source.ToPagedListAsync(paginationParams.PageNumber, paginationParams.PageSize, cancellationToken);
    }
}
