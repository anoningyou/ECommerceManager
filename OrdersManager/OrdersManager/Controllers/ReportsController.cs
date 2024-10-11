using Common.API.Controllers;
using Common.API.CQRS.Dispatchers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrdersManager.CQRS.Queries.Reports;
using OrdersManager.DTO.Reports;

namespace OrdersManager.Controllers
{
    /// <summary>
    /// Represents a controller for reports.
    /// </summary>
    /// <param name="dispatcher">The dispatcher to use for handling requests.</param>
    [Authorize(Policy = "RequiredModeratorRole")]
    public class ReportsController(IDispatcher dispatcher) : BaseApiController(dispatcher)
    {
        /// <summary>
        /// Gets a report by the customer.
        /// </summary>
        /// <param name="query">Filter.</param>
        /// <param name="cancellationToken">Cancellation token.</param>
        [HttpGet(nameof(GetCustomerReport))]
        public async Task<ActionResult<CustomerReportDto>> GetCustomerReport(
            [FromQuery]    GetCustomerReportQuery query,
            CancellationToken cancellationToken
        )
        {
            return Single(await QueryAsync(query, cancellationToken));
        }
    }
}
