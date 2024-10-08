using Common.API.Controllers;
using Common.API.CQRS.Dispatchers;
using Common.Helpers.Pagination;
using Microsoft.AspNetCore.Mvc;
using OrdersManager.CQRS.Queries.Products;
using OrdersManager.DTO.Products;

namespace OrdersManager.Controllers
{
    /// <summary>
    /// Represents a controller to handle Products.
    /// </summary>
    /// <param name="dispatcher">Dispatcher.</param>
    public class ProductsController(IDispatcher dispatcher) : BaseApiController(dispatcher)
    {
        /// <summary>
        /// Gets a list of countries.
        /// </summary>
        /// <param name="query">Filter.</param>
        [HttpGet(nameof(GetProducts))]
        public async Task<ActionResult<PagedList<ProductDto>>> GetProducts([FromQuery] GetProductsQuery query)
        {
            return Collection(await QueryAsync(query));
        }

    }
}
