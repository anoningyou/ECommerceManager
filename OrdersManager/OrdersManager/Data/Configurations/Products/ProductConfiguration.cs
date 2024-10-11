using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersManager.Data.Entities.Products;

namespace OrdersManager.Data.Configurations.Products;

/// <summary>
/// Represents the configuration for the entity <see cref="Product"/>.
/// </summary>
public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    ///<inheritdoc/>
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.Property(c => c.Name).HasMaxLength(255).IsRequired();
        builder.HasIndex(c => c.Name);
    }

}
