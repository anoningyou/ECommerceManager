using AutoMapper;
using OrdersManager.CQRS.Queries.Accounting;
using OrdersManager.Data.Entities.Accounting;

namespace OrdersManager.MappingProfiles.Accounting;

public class LoginQueryMappingProfile : Profile
{
    public LoginQueryMappingProfile()
    {
        CreateMap<LoginQuery, AppUser>();
    }

}
