using Common.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace OrdersManager.Data.Entities.Accounting;

/// <summary>
/// Represents an application user.
/// </summary>
public class AppUser : IdentityUser<Guid>, IIdentifiable<Guid>
{
    /// <summary>
    /// Gets or sets the date and time when the user was created.
    /// </summary>
    public DateTime Created { get; set; } = DateTime.UtcNow;

    /// <summary>
    /// Gets or sets the date and time when the user was last active.
    /// </summary>
    public DateTime LastActive { get; set; } = DateTime.UtcNow;

    /// <summary>
    /// Gets or sets the collection of user roles associated with the user.
    /// </summary>
    public virtual ICollection<AppUserRole> UserRoles { get; set; }
}
