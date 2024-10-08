using AutoMapper;
using OrdersManager.Data.Entities.Accounting;
using OrdersManager.DTO.Accounting;

namespace OrdersManager.MappingProfiles.Accounting;

public class UserDtoMappingProfile : Profile
{
    public UserDtoMappingProfile()
    {
        CreateMap<AppUser, UserDto>().ReverseMap();
    }

}
