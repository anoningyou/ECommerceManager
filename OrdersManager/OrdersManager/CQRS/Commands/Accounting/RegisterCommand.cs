namespace OrdersManager.CQRS.Commands.Accounting;

/// <summary>
/// Represents the data transfer object for user registration.
/// </summary>
public class RegisterCommand
{
    /// <summary>
    /// Gets or sets the username.
    /// </summary>
    public string UserName { get; set; }

    /// <summary>
    /// Gets or sets the password.
    /// </summary>
    public string Password { get; set; }

}
