using AutoMapper;
using OrdersManager.Data.Entities.Products;
using OrdersManager.DTO.Products;

namespace OrdersManager.MappingProfiles.Products;

/// <summary>
/// Represents a product data transfer object mapping profile.
/// </summary>
public class ProductDtoMappingProfile : Profile
{
    /// <summary>
    /// Initializes a new instance of the <see cref="ProductDtoMappingProfile"/> class.
    /// Configures the mappings between different types.
    public ProductDtoMappingProfile()
    {
        CreateMap<ProductDto, Product>().ReverseMap();
    }

}
