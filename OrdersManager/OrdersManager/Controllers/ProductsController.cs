using Common.API.Controllers;
using Common.API.CQRS.Dispatchers;
using Common.Helpers.Pagination;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrdersManager.CQRS.Queries.Products;
using OrdersManager.DTO.Products;

namespace OrdersManager.Controllers
{
    /// <summary>
    /// Represents a controller to handle Products.
    /// </summary>
    /// <param name="dispatcher">Dispatcher.</param>
    [Authorize(Policy = "RequiredUserRole")]
    public class ProductsController(IDispatcher dispatcher) : BaseApiController(dispatcher)
    {
        /// <summary>
        /// Gets a list of products.
        /// </summary>
        /// <param name="query">Filter.</param>
        /// <param name="cancellationToken">Cancellation token.</param>
        [HttpGet(nameof(GetProducts))]
        public async Task<ActionResult<PagedList<ProductDto>>> GetProducts(
            [FromQuery] GetProductsQuery query,
            CancellationToken cancellationToken
        )
        {
            return Collection(await QueryAsync(query, cancellationToken));
        }

    }
}
