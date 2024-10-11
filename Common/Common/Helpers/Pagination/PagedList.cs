
using Common.Interfaces.Pagination;

namespace Common.Helpers.Pagination;

/// <summary>
/// Represents a paginated list of items.
/// </summary>
/// <typeparam name="T">The type of items in the list.</typeparam>
/// <param name="items">The items to include in the paginated list.</param>
/// <param name="count">The total number of items.</param>
/// <param name="pageNumber">The current page number.</param>
/// <param name="pageSize">The number of items per page.</param>
/// <remarks>
/// This class inherits from <see cref="List{T}"/> and adds pagination properties.
/// </remarks>
public class PagedList<T> : List<T>, IPagedCollection<T>
{
    /// <summary>
    /// Initializes a new instance of the <see cref="PagedList{T}"/> class.
    /// </summary>
    /// <param name="items">The items to include in the paginated list.</param>
    /// <param name="count">The total number of items.</param>
    /// <param name="pageNumber">The current page number.</param>
    /// <param name="pageSize">The number of items per page.</param>
    public PagedList(IEnumerable<T> items,
        int count,
        int pageNumber,
        int pageSize)
    : base(Math.Min(count, pageSize))
    {
        PageNumber = pageNumber;
        TotalPages = (int) Math.Ceiling(count / (double) pageSize);
        PageSize = pageSize;
        TotalCount = count;
        Math.Round(count / (double) pageSize, 10);
        AddRange(items);
    }

    /// <summary>
    /// Gets the current page number.
    /// </summary>
    public int PageNumber { get; set; }

    /// <summary>
    /// Gets the total number of pages.
    /// </summary>
    public int TotalPages { get; set; }

    /// <summary>
    /// Gets the number of items per page.
    /// </summary>
    public int PageSize { get; set; }

    /// <summary>
    /// Gets the total number of items.
    /// </summary>
    public int TotalCount { get; set; } 
}
