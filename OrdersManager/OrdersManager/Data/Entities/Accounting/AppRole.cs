using Common.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace OrdersManager.Data.Entities.Accounting;

/// <summary>
/// Represents an application role.
/// </summary>
public class AppRole : IdentityRole<Guid>, IIdentifiable<Guid>
{
    /// <summary>
    /// Gets or sets the collection of user roles associated with this application role.
    /// </summary>
    public ICollection<AppUserRole> UserRoles { get; set; } 
}
