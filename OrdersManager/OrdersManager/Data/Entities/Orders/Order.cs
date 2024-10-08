using Common.DAL.Entities;
using OrdersManager.Data.Entities.Customers;
using OrdersManager.Enums.Orders;

namespace OrdersManager.Data.Entities.Orders;

/// <summary>
/// Represents an order in the e-commerce system.
/// </summary>
public class Order : BaseEntity
{
    /// <summary>
    /// Gets or sets the date and time when the order was created.
    /// </summary>
    public DateTime CreationDate { get; set; }

    /// <summary>
    /// Gets or sets the date and time when the order was last edited.
    /// </summary>
    public DateTime LastEditDate { get; set; }

    /// <summary>
    /// Gets or sets the current state of the order.
    /// </summary>
    public OrderStateEnum State { get; set; }

    /// <summary>
    /// Gets or sets the identifier of the customer that placed the order.
    /// </summary>
    public Guid CustomerId { get; set; }

    /// <summary>
    /// Gets or sets the identifier of the customer that placed the order.
    /// </summary>
    public virtual Customer Customer { get; set; }

    /// <summary>
    /// Gets or sets the collection of order lines associated with the order.
    /// </summary>
    public virtual ICollection<OrderLine> OrderLines { get; set; }
}
