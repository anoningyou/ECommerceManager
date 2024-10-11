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

public class GetCustomersQueryHandler(IUnitOfWork<DataContext> unitOfWork, IMapper mapper) : IQueryHandler<GetCustomersQuery, PagedList<CustomerDto>>
{
    private readonly IMapper _mapper = mapper;
    private readonly IRepositoryReadonly<Customer, Guid> _repository = unitOfWork
        .GetRepositoryReadonly<Customer, Guid>();


    ///<inheritdoc/>
    public Task<PagedList<CustomerDto>> HandleAsync(
        GetCustomersQuery query,
        CancellationToken cancellationToken = default)
    {
        IQueryable<CustomerDto> customers = _repository.GetAll<CustomerDto>(
            mapConfig: _mapper.ConfigurationProvider);
        if (!string.IsNullOrWhiteSpace(query.Name))
        {
            customers = customers.Where(x => x.Name.Contains(query.Name));
        }

        return customers.ToPagedListAsync(query);
    
    }
}
