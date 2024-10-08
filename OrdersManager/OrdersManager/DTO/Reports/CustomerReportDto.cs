using OrdersManager.DTO.Products;

namespace OrdersManager.DTO.Reports;

/// <summary>
/// Represents a customer report.
/// </summary>
public class CustomerReportDto
{
    /// <summary>
    /// Gets or sets the customer identifier.
    /// </summary>
    public int OrdersCount { get; set; }

    /// <summary>
    /// Gets or sets the start date.
    /// </summary
    public decimal TotalAmount { get; set; }

    /// <summary>
    /// Gets or sets the end date.
    /// </summary>
    public ProductDto FavoriteProduct { get; set; } 

}
