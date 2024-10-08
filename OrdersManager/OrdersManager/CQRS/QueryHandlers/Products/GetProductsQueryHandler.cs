using AutoMapper;
using Common.API.CQRS.Queries;
using Common.DAL.Extensions;
using Common.DAL.Interfaces;
using Common.Helpers.Pagination;
using OrdersManager.CQRS.Queries.Products;
using OrdersManager.Data.Entities.Products;
using OrdersManager.DTO.Products;
using OrdersManager.Entities;

namespace OrdersManager.CQRS.QueryHandlers.Products;

/// <summary>
/// Represents a query handler to get a list of products.
/// </summary>
public class GetProductsQueryHandler (IUnitOfWork<DataContext> unitOfWork, IMapper mapper) : IQueryHandler<GetProductsQuery, PagedList<ProductDto>>
{
    private readonly IMapper _mapper = mapper;
    private readonly IRepositoryReadonly<Product, Guid> _repository = unitOfWork
        .GetRepositoryReadonly<Product, Guid>();


    ///<inheritdoc/>
    public Task<PagedList<ProductDto>> HandleAsync(GetProductsQuery query)
    {
        IQueryable<ProductDto> products = _repository.GetAll<ProductDto>(mapConfig: _mapper.ConfigurationProvider);
        if (!string.IsNullOrWhiteSpace(query.Name))
        {
            products = products.Where(x => x.Name.Contains(query.Name));
        }

        return products.ToPagedListAsync(query);
    
    }
}
