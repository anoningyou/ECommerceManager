using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdersManager.Data.Entities.Customers;

namespace OrdersManager.Data.Configurations.Customers;

public class CustomerConfiguration: IEntityTypeConfiguration<Customer>
{
    ///<inheritdoc/>
    public void Configure(EntityTypeBuilder<Customer> builder)
    {
        builder.HasIndex(c => c.UserId).IsUnique();
        builder.Property(c => c.Name).HasMaxLength(50).IsRequired();
        builder.Property(c => c.LastName).HasMaxLength(50).IsRequired();
        builder.Property(c => c.Address).IsRequired();
        
        builder.HasIndex(c => c.Name);
    }

}
