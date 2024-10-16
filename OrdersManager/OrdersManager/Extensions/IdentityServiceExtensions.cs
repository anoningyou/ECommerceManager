using System;
using Microsoft.AspNetCore.Identity;
using OrdersManager.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using OrdersManager.Data.Entities.Accounting;
using Common.Enums;

namespace OrdersManager.Extensions;

/// <summary>
/// Provides extension methods for adding identity services to the <see cref="IServiceCollection"/>.
/// </summary>
public static class IdentityServiceExtensions
{
    /// <summary>
    /// Adds identity services to the specified <see cref="IServiceCollection"/>.
    /// </summary>
    /// <param name="services">The <see cref="IServiceCollection"/> to add the identity services to.</param>
    /// <param name="config">The <see cref="IConfiguration"/> containing the configuration settings.</param>
    /// <returns>The modified <see cref="IServiceCollection"/>.</returns>
    public static IServiceCollection AddIdentityServices(this IServiceCollection services,
        IConfiguration config )
    {
        services.AddIdentityCore<AppUser>(opt=>
            {
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequiredLength = 2;
                opt.Password.RequireLowercase = false;
                opt.Password.RequireUppercase = false;
            })
            .AddRoles<AppRole>()
            .AddRoleManager<RoleManager<AppRole>>()
            .AddEntityFrameworkStores<DataContext>();

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options=>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding
                    .UTF8.GetBytes(config["TokenKey"])),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

        services.AddAuthorization(opt =>
        {
            opt.AddPolicy("RequiredAdminRole", policy => policy.RequireRole(RolesEnum.Admin.ToString()));
            opt.AddPolicy("RequiredModeratorRole", policy => policy.RequireRole(RolesEnum.Admin.ToString(), RolesEnum.Moderator.ToString()));
            opt.AddPolicy("RequiredCustomerRole", policy => policy.RequireRole(RolesEnum.Admin.ToString(), RolesEnum.Moderator.ToString(), RolesEnum.Customer.ToString()));
            opt.AddPolicy("RequiredUserRole", policy => policy.RequireRole(RolesEnum.Admin.ToString(), RolesEnum.Moderator.ToString(), RolesEnum.Customer.ToString(), RolesEnum.User.ToString()));
        });

        return services;
    } 
}