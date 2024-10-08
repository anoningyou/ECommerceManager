namespace Common.Interfaces.Pagination;

/// <summary>
/// Represents the pagination parameters interface.
/// </summary>
public interface IPaginationParams
{
    /// <summary>
    /// Gets or sets the page number.
    /// </summary>
    public int PageNumber { get; set; }

    /// <summary>
    /// Gets or sets the page size.
    /// </summary>
    public int PageSize { get; set; }
}
