using AutoMapper;
using OrdersManager.CQRS.Commands.Accounting;
using OrdersManager.Data.Entities.Accounting;

namespace OrdersManager.MappingProfiles.Accounting;

public class RegisterCommandMappingProfile : Profile
{
    public RegisterCommandMappingProfile()
    {
        CreateMap<RegisterCommand, AppUser>();
    }

}
