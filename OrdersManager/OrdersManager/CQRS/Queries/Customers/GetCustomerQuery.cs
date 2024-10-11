using Common.API.CQRS.Queries;
using OrdersManager.DTO.Customers;

namespace OrdersManager.CQRS.Queries.Customers;

public class GetCustomerQuery : IQuery<CustomerDto>
{
    /// <summary>
    /// Filter by id.
    /// </summary>
    public Guid Id { get; set; }

}
