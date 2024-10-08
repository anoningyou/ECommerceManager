using Common.DAL.Entities;
using OrdersManager.Data.Entities.Products;

namespace OrdersManager.Data.Entities.Orders;

/// <summary>
/// Represents a line item in an order, detailing the product and quantity.
/// </summary>
public class OrderLine : BaseEntity
{
    /// <summary>
    /// Gets or sets the quantity of the product in the order line.
    /// </summary>
    public int Count { get; set; }

    /// <summary>
    /// Gets or sets the price of the product in the order line.
    /// </summary>
    public decimal Price { get; set; }

    /// <summary>
    /// Gets or sets the identifier of the order that this order line belongs to.
    /// </summary>
    public Guid ProductId { get; set; }

    /// <summary>
    /// Gets or sets the product associated with the order line.
    /// </summary>
    public virtual Product Product { get; set; }

    /// <summary>
    /// Gets or sets the identifier of the order that this order line belongs to.
    /// </summary>
    public Guid OrderId { get; set; }

    /// <summary>
    /// Gets or sets the order that this order line belongs to.
    /// </summary>
    public virtual Order Order { get; set; }
}
