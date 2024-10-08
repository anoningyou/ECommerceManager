using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersManager.Data.Entities.Accounting;

namespace OrdersManager.Data.Configurations.Accounting;

/// <summary>
/// Represents the configuration for the AppUser entity.
/// </summary>
public class AppUserConfiguration : IEntityTypeConfiguration<AppUser>
{
    ///<inheritdoc/>
    public void Configure(EntityTypeBuilder<AppUser> builder)
    {
        builder.HasMany(ur => ur.UserRoles)
            .WithOne(u => u.User)
            .HasForeignKey(ur => ur.UserId)
            .IsRequired();
    }
}
