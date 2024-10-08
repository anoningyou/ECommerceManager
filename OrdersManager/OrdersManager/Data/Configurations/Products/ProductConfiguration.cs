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
        builder.HasData(
            new Product
            {
                Id = Guid.Parse("8db6c8ac-968a-470e-a5b3-f78cae962e1b"),
                Name = "Product 1",
                Price = 100
            },
            new Product
            {
                Id = Guid.Parse("0f4f4819-6f2b-47f2-b2d0-86755deaa080"),
                Name = "Product 2",
                Price = 200
            },
            new Product
            {
                Id = Guid.Parse("1dda6347-9154-4df5-b986-cfb93fe4b3bb"),
                Name = "Product 3",
                Price = 300
            }
        );
    }

}
