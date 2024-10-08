using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersManager.Data.Entities.Orders;

namespace OrdersManager.Data.Configurations.Orders;

/// <summary>
/// Represents the configuration for the OrderLine entity.
/// </summary>
public class OrderLineConfiguration : IEntityTypeConfiguration<OrderLine>
{
    ///<inheritdoc/>
    public void Configure(EntityTypeBuilder<OrderLine> builder)
    {
        builder.HasOne(ol => ol.Product)
            .WithMany(p => p.OrderLines)
            .HasForeignKey(ol => ol.ProductId)
            .IsRequired();

        builder.HasOne(ol => ol.Order)
            .WithMany(o => o.OrderLines)
            .HasForeignKey(ol => ol.OrderId)
            .IsRequired();

        builder.HasIndex(ol => new { ol.OrderId, ol.ProductId });
    }

}
