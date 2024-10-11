using AutoMapper;
using Common.API.CQRS.Queries;
using Common.DAL.Extensions;
using Common.DAL.Interfaces;
using Common.Helpers.Pagination;
using OrdersManager.CQRS.Queries.Customers;
using OrdersManager.Data.Entities.Customers;
using OrdersManager.DTO.Customers;
using OrdersManager.Entities;

namespace OrdersManager.CQRS.QueryHandlers.Customers;

public class GetCustomerQueryHandler(IUnitOfWork<DataContext> unitOfWork, IMapper mapper) : IQueryHandler<GetCustomerQuery, CustomerDto>
{
    private readonly IMapper _mapper = mapper;
    private readonly IRepositoryReadonly<Customer, Guid> _repository = unitOfWork
        .GetRepositoryReadonly<Customer, Guid>();


    ///<inheritdoc/>
    public Task<CustomerDto> HandleAsync(
        GetCustomerQuery query,
        CancellationToken cancellationToken = default)
    {
        return _repository.GetAsync<CustomerDto>(query.Id, mapConfig: _mapper.ConfigurationProvider, cancellationToken: cancellationToken);
    
    }
}
