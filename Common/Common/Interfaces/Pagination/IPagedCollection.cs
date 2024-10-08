namespace Common.Interfaces.Pagination;

/// <summary>
/// Represents a paginated collection of items.
/// </summary>
public interface IPagedCollection<T> : IEnumerable<T>
{
    /// <summary>
    /// Gets the current page number.
    /// </summary>
    public int CurrentPage { get; set; }

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
