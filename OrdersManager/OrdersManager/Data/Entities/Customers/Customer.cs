using Common.DAL.Entities;
using OrdersManager.Data.Entities.Accounting;

namespace OrdersManager.Data.Entities.Customers;

/// <summary>
/// Represents a customer in the accounting system.
/// </summary>
public class Customer : BaseEntity
{
    /// <summary>
    /// Gets or sets the first name of the customer.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Gets or sets the last name of the customer.
    /// </summary>
    public string LastName { get; set; }

    /// <summary>
    /// Gets or sets the address of the customer.
    /// </summary>
    public string Address { get; set; }

    /// <summary>
    /// Gets or sets the URL of the customer's photo.
    /// </summary>
    public string PhotoUrl { get; set; }

    /// <summary>
    /// Gets or sets the unique identifier for the user associated with the customer.
    /// </summary>
    public Guid UserId { get; set; }

    /// <summary>
    /// Gets or sets the user associated with the customer.
    /// </summary>
    public virtual AppUser User { get; set; }
}