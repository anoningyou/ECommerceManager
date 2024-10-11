using AutoMapper;
using OrdersManager.Data.Entities.Customers;
using OrdersManager.DTO.Customers;

namespace OrdersManager.MappingProfiles.Customers;

/// <summary>
/// Represents a product data transfer object mapping profile.
/// </summary>
public class CustomerDtoMappingProfile : Profile
{
    /// <summary>
    /// Initializes a new instance of the <see cref="CustomerDtoMappingProfile"/> class.
    /// Configures the mappings between different types.
    public CustomerDtoMappingProfile()
    {
        CreateMap<CustomerDto, Customer>().ReverseMap();
    }

}
