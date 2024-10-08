using Common.API.CQRS.Queries;
using Common.Helpers.Pagination;
using OrdersManager.DTO.Products;

namespace OrdersManager.CQRS.Queries.Products;

/// <summary>
/// Represents a query to get a list of products.
/// </summary>
public class GetProductsQuery : PaginationParams, IQuery<PagedList<ProductDto>>
{
    /// <summary>
    /// Filter by part of the name of the product.
    /// </summary>
    public string Name { get; set; }

}
