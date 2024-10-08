using AutoMapper;

namespace OrdersManager.MappingProfiles;

/// <summary>
/// AutoMapper profile class for mapping
/// between different types.
/// </summary>
public class CommonMappingProfile : Profile
{
    /// <summary>
    /// Initializes a new instance of the <see cref="AutoMapperProfiles"/> class.
    /// Configures the mappings between different types.
    /// </summary>
    public CommonMappingProfile()
    {
        CreateMap<DateTime, DateTime>()
            .ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc));

        CreateMap<DateTime?, DateTime?>()
            .ConvertUsing(d => d.HasValue ? DateTime.SpecifyKind(d.Value, DateTimeKind.Utc) : null);
        
    }
}
