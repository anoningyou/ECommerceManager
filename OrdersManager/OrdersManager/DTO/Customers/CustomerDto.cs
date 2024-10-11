using Common.API.DTO;

namespace OrdersManager.DTO.Customers;

public class CustomerDto : BaseDto
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
}
