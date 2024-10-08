using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersManager.Data.Entities.Orders;

namespace OrdersManager.Data.Configurations.Orders;

/// <summary>
/// Represents the configuration for the Order entity.
/// </summary>
public class OrderConfiguration: IEntityTypeConfiguration<Order>
{
    ///<inheritdoc/>
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.HasIndex(o => o.CustomerId);
    }

}