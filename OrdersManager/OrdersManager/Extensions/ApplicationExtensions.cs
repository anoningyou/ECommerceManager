using Microsoft.EntityFrameworkCore;
using OrdersManager.Entities;

namespace OrdersManager.Extensions;

/// <summary>
/// Represents the application extensions class.
/// </summary>
public static class ApplicationExtensions
{
    /// <summary>
    /// Applies the migration to the database.
    /// </summary>
    public static async Task ApplyMigrationAsync(this WebApplication app)
    {
        using IServiceScope scope = app.Services.CreateScope();
        IServiceProvider services = scope.ServiceProvider;

        try
        {
            DataContext context = services.GetRequiredService<DataContext>();
            await context.Database.MigrateAsync();
        }
        catch (Exception ex)
        {
            ILogger<Program> logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex,"An error occured during migration");
        }
    }

}
