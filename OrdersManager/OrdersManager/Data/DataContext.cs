using System.Reflection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OrdersManager.Data;
using OrdersManager.Data.Entities.Accounting;
using OrdersManager.Data.Entities.Customers;
using OrdersManager.Data.Entities.Orders;
using OrdersManager.Data.Entities.Products;

namespace OrdersManager.Entities;

/// <summary>
/// Represents the database context for the application.
/// </summary>
public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, Guid,
    IdentityUserClaim<Guid>, AppUserRole, IdentityUserLogin<Guid>,
    IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>(options)
{
    /// <summary>
    /// Gets or sets the Customers in the database.
    /// </summary>
    public DbSet<Customer> Customers { get; set; }

    /// <summary>
    /// Gets or sets the Products in the database.
    /// </summary>
    public DbSet<Product> Products { get; set; }

    /// <summary>
    /// Gets or sets the Orders in the database.
    /// </summary>
    public DbSet<Order> Orders { get; set; }

    /// <summary>
    /// Gets or sets the OrderLines in the database.
    /// </summary>
    public DbSet<OrderLine> OrderLines { get; set; }

    //<inheritdoc/>
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        
        // Apply configurations from IEntityTypeConfiguration<T>
        MethodInfo applyGenericMethod = typeof(ModelBuilder).GetMethod("ApplyConfiguration", BindingFlags.Instance | BindingFlags.Public); 
            
        foreach (Type type in Assembly.GetExecutingAssembly().GetTypes()
            .Where(c => c.IsClass && !c.IsAbstract && !c.ContainsGenericParameters)) 
        {

        foreach (Type iface in type.GetInterfaces()) {
                if (iface.IsConstructedGenericType && iface.GetGenericTypeDefinition() == typeof(IEntityTypeConfiguration<>)) {
                    MethodInfo applyConcreteMethod = applyGenericMethod.MakeGenericMethod(iface.GenericTypeArguments[0]);
                    applyConcreteMethod.Invoke(builder, [Activator.CreateInstance(type)]);
                    break;
                }
            }
        }

        // Seed the database with initial data
        builder.SeedData();
    }   

}