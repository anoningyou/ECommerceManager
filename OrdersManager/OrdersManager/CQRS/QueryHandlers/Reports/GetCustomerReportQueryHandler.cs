using AutoMapper;
using Common.API.CQRS.Queries;
using Common.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using OrdersManager.CQRS.Queries.Reports;
using OrdersManager.Data.Entities.Orders;
using OrdersManager.Data.Entities.Products;
using OrdersManager.DTO.Products;
using OrdersManager.DTO.Reports;
using OrdersManager.Entities;

namespace OrdersManager.CQRS.QueryHandlers.Reports;

public class GetCustomerReportQueryHandler (IUnitOfWork<DataContext> unitOfWork, IMapper mapper) : IQueryHandler<GetCustomerReportQuery, CustomerReportDto>
{
    private readonly IMapper _mapper = mapper;
    private readonly IRepositoryReadonly<Order, Guid> _repositoryOrders = unitOfWork
        .GetRepositoryReadonly<Order, Guid>();
    private readonly IRepositoryReadonly<Product, Guid> _repositoryProducts = unitOfWork
        .GetRepositoryReadonly<Product, Guid>();
    public async Task<CustomerReportDto> HandleAsync(
        GetCustomerReportQuery query,
        CancellationToken cancellationToken = default)
    {
        List<Order> orders = await _repositoryOrders.GetListAsync<Order>(
            predicate: x => x.CustomerId == query.CustomerId
                            && x.CreationDate >= query.StartDate
                            && x.CreationDate <= query.EndDate,
            include: x => x.Include(y => y.OrderLines)
        );

        Guid? favoriteProductId = orders
            .SelectMany(x => x.OrderLines)
            .GroupBy(x => x.ProductId)
            .OrderByDescending(x => x.Count())
            .FirstOrDefault()?.Key;

        CustomerReportDto report = new()
        {
            OrdersCount = orders.Count,
            TotalAmount = orders.Sum(x => x.OrderLines.Sum(y => y.Price * y.Count)),
            FavoriteProduct = favoriteProductId.HasValue
                ? await _repositoryProducts.GetAsync<ProductDto>(favoriteProductId.Value, mapConfig: _mapper.ConfigurationProvider)
                : null
        };

        return report;
    }
}
