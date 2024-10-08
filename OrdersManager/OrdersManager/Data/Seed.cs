using System;
using Common.Enums;
using Common.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OrdersManager.Data.Entities.Accounting;
using OrdersManager.Data.Entities.Customers;
using OrdersManager.Data.Entities.Orders;
using OrdersManager.Data.Entities.Products;

namespace OrdersManager.Data;

/// <summary>
/// Represents the seeding of the database with initial data.
/// </summary>
public static class Seed
{

    /// <summary>
    /// Seeds the database with initial data.
    /// </summary>
    public static void SeedData(this ModelBuilder modelBuilder)
    {

        List<Customer> customers = SeedUsers(modelBuilder);

        List<Product> products = SeedProducts(modelBuilder);

        SeedOrders(modelBuilder, customers, products);
    }

    /// <summary>
    /// Seeds the users in the database.
    /// </summary>
    /// <param name="modelBuilder">Model builder</param>
    /// <param name="customers">Seeded customers</param>
    private static List<Customer> SeedUsers(ModelBuilder modelBuilder)
    {
        List<AppRole> roles = [];
        foreach (RolesEnum role in Enum.GetValues(typeof(RolesEnum)))
        {
            roles.Add(new AppRole
            {
                Id = Guid.NewGuid(),
                Name = role.ToString(),
                NormalizedName = role.ToString().ToUpper()
            });
        }

        List<AppUserRole> userRoles = [];

        AppUser admin = new AppUser
        {
            Id = Guid.NewGuid(),
            UserName = "admin",
            NormalizedUserName = "ADMIN"
        };

        userRoles.Add(new AppUserRole
        {
            RoleId = roles.Find(r => r.Name == RolesEnum.Admin.ToString()).Id,
            UserId = admin.Id
        });

        List<AppUser> customerUsers = new(100);
        Guid customerRoleId = roles.Find(r => r.Name == RolesEnum.Customer.ToString()).Id;

        for (int i = 0; i < 100; i++)
        {
            AppUser user = new()
            {
                Id = Guid.NewGuid(),
                UserName = $"user{i}",
                NormalizedUserName = $"USER{i}"
            };

            userRoles.Add(new AppUserRole
            {
                RoleId = customerRoleId,
                UserId = user.Id
            });
            customerUsers.Add(user);
        }

        List<AppUser> users = new(101)
        {
            admin
        };
        users.AddRange(customerUsers);

        PasswordHasher<AppUser> hasher = new();

        foreach (AppUser user in users)
        {
            user.PasswordHash = hasher.HashPassword(user, "Pa$$w0rd");
        }

        modelBuilder.Entity<AppRole>().HasData(
            roles
        );

        modelBuilder.Entity<AppUser>().HasData(
            users
        );

        modelBuilder.Entity<AppUserRole>().HasData(
            userRoles
        );

        List<Customer> customers = new(customerUsers.Count);
        customers.AddRange(customerUsers.Select((c, i) => new Customer
        {
            Id = Guid.NewGuid(),
            UserId = c.Id,
            Name = $"Name {i}",
            LastName = $"Last Name {i}",
            Address = $"Address {i}"
        }));

        modelBuilder.Entity<Customer>().HasData(customers);

        return customers;
    }

    /// <summary>
    /// Seeds the products in the database.
    /// </summary>
    /// <param name="modelBuilder">Model builder</param>
    private static List<Product> SeedProducts(ModelBuilder modelBuilder) 
    {
        List<Product> products = new(100);
        Random random = new();
        for (int i = 0; i < 100; i++)
        {
            products.Add(new Product
            {
                Id = Guid.NewGuid(),
                Name = $"Product {i}",
                Price = random.Next(1000, 999999),
            });
        }

        modelBuilder.Entity<Product>().HasData(
            products
        );

        return products;
    }

    /// <summary>
    /// Seeds the orders in the database.
    /// </summary>
    /// <param name="modelBuilder">Model builder</param>
    /// <param name="customers">Seeded customers</param>
    /// <param name="products">Seeded products</param>
    private static void SeedOrders(ModelBuilder modelBuilder, List<Customer> customers, List<Product> products) 
    {
        List<Order> orders = [];
        List<OrderLine> orderLines = [];
        DateTime startDate = DateTime.Now.AddYears(-10);
        Random random = new();

        foreach (Customer customer in customers)
        {
            int ordersCount = random.Next(1, 10);
            for (int orderNum = 0; orderNum < ordersCount; orderNum++)
            {
                DateTime creationDate = DateExtensions.Random(startDate, DateTime.Now);
                Order order = new()
                {
                    Id = Guid.NewGuid(),
                    CustomerId = customer.Id,
                    CreationDate = creationDate,
                    LastEditDate = DateExtensions.Random(creationDate, DateTime.Now, random),
                };

                orders.Add(order);

                int orderLinesCount = random.Next(1, 10);
                for (int lineNum = 0; lineNum < orderLinesCount; lineNum++)
                {
                    Product product = products[random.Next(0, products.Count -1)];
                    orderLines.Add(new OrderLine
                    {
                        Id = Guid.NewGuid(),
                        OrderId = order.Id,
                        ProductId = product.Id,
                        Price = product.Price,
                        Count = random.Next(1, 10)
                    });
                }
            }
        }

        modelBuilder.Entity<Order>().HasData(
            orders
        );
        
        modelBuilder.Entity<OrderLine>().HasData(
            orderLines
        );
    }
}
