using Common.API.CQRS.Queries;
using OrdersManager.DTO.Reports;

namespace OrdersManager.CQRS.Queries.Reports;

/// <summary>
/// Represents a query to get a customer report.
/// </summary>
public class GetCustomerReportQuery : IQuery<CustomerReportDto>
{
    /// <summary>
    /// Gets or sets the customer identifier.
    /// </summary>
    public Guid CustomerId { get; set; }

    /// <summary>
    /// Gets or sets the start date.
    /// </summary
    public DateTime StartDate { get; set; }

    /// <summary>
    /// Gets or sets the end date.
    /// </summary>
    public DateTime EndDate { get; set; }

}
