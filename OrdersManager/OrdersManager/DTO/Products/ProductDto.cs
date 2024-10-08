using Common.API.DTO;

namespace OrdersManager.DTO.Products;

/// <summary>
/// Represents a product data transfer object.
/// </summary>
public class ProductDto : BaseDto
{
    /// <summary>
    /// Gets or sets the name of the product.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Gets or sets the price of the product.
    /// </summary>
    public int Price { get; set; }
}
