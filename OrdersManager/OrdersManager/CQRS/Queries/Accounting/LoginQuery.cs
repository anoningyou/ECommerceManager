namespace OrdersManager.CQRS.Queries.Accounting;

/// <summary>
/// Represents the data transfer object for user login.
/// </summary>
public class LoginQuery
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
