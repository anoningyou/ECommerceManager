using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersManager.Data.Entities.Accounting;

namespace OrdersManager.Data.Configurations.Accounting;

/// <summary>
/// Represents the configuration for the AppRole entity.
/// </summary>
public class AppRoleConfiguration : IEntityTypeConfiguration<AppRole>
{
    ///<inheritdoc/>
    public void Configure(EntityTypeBuilder<AppRole> builder)
    {
        builder.HasMany(u => u.UserRoles)
            .WithOne(u => u.Role)
            .HasForeignKey(u => u.RoleId)
            .IsRequired();
    }
}
