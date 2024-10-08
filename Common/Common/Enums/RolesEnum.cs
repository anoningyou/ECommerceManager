namespace Common.Enums;

/// <summary>
/// Represents the different roles available in the ECommerceManager system.
/// </summary>
public enum RolesEnum
{
    /// <summary>
    /// Represents a guest user with limited access.
    /// </summary>
    Guest = 0,

    /// <summary>
    /// Represents a user.
    /// </summary>
    User = 1,

    /// <summary>
    /// Represents a customer with purchasing capabilities.
    /// </summary>
    Customer = 2,

    /// <summary>
    /// Represents a moderator with permissions to manage content.
    /// </summary>
    Moderator = 3,

    /// <summary>
    /// Represents an administrator with full access.
    /// </summary>
    Admin = 4,
}
