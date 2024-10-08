namespace OrdersManager.Enums.Orders;

/// <summary>
/// Represents the state of an order.
/// </summary>
public enum OrderStateEnum
{
    /// <summary>
    /// Represents an order that has been created but not yet processed.
    /// </summary>
    Created = 1,
    
    /// <summary>
    /// Represents an order that has been processed and is awaiting shipment.
    /// </summary>
    InProgress = 2,
    
    /// <summary>
    /// Represents an order that has been completed.
    /// </summary>
    Completed = 3,
    
    /// <summary>
    /// Represents an order that has been cancelled.
    /// </summary>
    Cancelled = 4,
}
