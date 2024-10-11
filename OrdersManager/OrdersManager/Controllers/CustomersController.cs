using Common.API.Controllers;
using Common.API.CQRS.Dispatchers;
using Common.Helpers.Pagination;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrdersManager.CQRS.Queries.Customers;
using OrdersManager.DTO.Customers;

namespace OrdersManager.Controllers
{
    /// <summary>
    /// Represents a controller to handle Customers.
    /// </summary>
    /// <param name="dispatcher">Dispatcher.</param>
    [Authorize(Policy = "RequiredModeratorRole")]
    public class CustomersController(IDispatcher dispatcher) : BaseApiController(dispatcher)
    {
        /// <summary>
        /// Gets a list of customers.
        /// </summary>
        /// <param name="query">Filter.</param>
        /// <param name="cancellationToken">Cancellation token.</param>
        [HttpGet(nameof(GetCustomers))]
        public async Task<ActionResult<PagedList<CustomerDto>>> GetCustomers(
            [FromQuery] GetCustomersQuery query,
            CancellationToken cancellationToken
        )
        {
            return Collection(await QueryAsync(query, cancellationToken));
        }

        /// <summary>
        /// Gets a customer.
        /// </summary>
        /// <param name="query">Filter.</param>
        /// <param name="cancellationToken">Cancellation token.</param>
        [HttpGet(nameof(GetCustomer))]
        public async Task<ActionResult<CustomerDto>> GetCustomer(
            [FromQuery] GetCustomerQuery query,
            CancellationToken cancellationToken
        )
        {
            return Single(await QueryAsync(query, cancellationToken));
        }
    }
}
