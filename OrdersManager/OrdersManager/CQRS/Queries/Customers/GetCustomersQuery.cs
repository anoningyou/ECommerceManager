using Common.API.CQRS.Queries;
using Common.Helpers.Pagination;
using OrdersManager.DTO.Customers;

namespace OrdersManager.CQRS.Queries.Customers;

public class GetCustomersQuery : PaginationParams, IQuery<PagedList<CustomerDto>>
{
    /// <summary>
    /// Filter by part of the name of the customer.
    /// </summary>
    public string Name { get; set; }

}
