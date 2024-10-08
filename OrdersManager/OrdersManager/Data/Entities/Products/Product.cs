using System.ComponentModel.DataAnnotations;
using Common.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using OrdersManager.Data.Entities.Orders;

namespace OrdersManager.Data.Entities.Products;

/// <summary>
/// Represents a product in the orders management system.
/// </summary>
public class Product : BaseEntity
{
    /// <summary>
    /// Gets or sets the name of the product.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Gets or sets the price of the product.
    /// </summary>
    public int Price { get; set; }

    /// <summary>
    /// Gets or sets the collection of order lines associated with the product.
    /// </summary>
    public virtual ICollection<OrderLine> OrderLines { get; set; }
}
