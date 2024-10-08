using System.Reflection;
using Autofac;
using AutoMapper;
using Common.API.CQRS.Dispatchers;
using Common.DAL.Interfaces;
using Common.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using OrdersManager.Entities;
using OrdersManager.Services;
using OrdersManager.Services.Interfaces;

namespace OrdersManager.Extensions;

/// <summary>
/// Provides extension methods for registering services and configuring the Autofac container.
/// </summary>
public static class ContainerBuilderExtensions
{

    /// <summary>
    /// Registers the AutoMapper profile from the external assemblies.
    /// </summary>
    /// <param name="builder">The builder.</param>
    public static void RegisterMaps(this ContainerBuilder builder)
    {
        builder.Register(context => new MapperConfiguration(cfg =>
            {
                //Register Mapper Profile
                cfg.AddMaps(Assembly.GetExecutingAssembly());
            }
            )).AsSelf().SingleInstance();

        builder.Register(c =>
            {
                //This resolves a new context that can be used later.
                IComponentContext context = c.Resolve<IComponentContext>();
                MapperConfiguration config = context.Resolve<MapperConfiguration>();
                return config.CreateMapper(context.Resolve);
            })
            .As<IMapper>()
            .InstancePerLifetimeScope();
    }

    /// <summary>
    /// Adds application services to the Autofac container.
    /// </summary>
    /// <param name="builder">The builder.</param>
    public static void AddApplicationServices(this ContainerBuilder builder)
    {
        builder.RegisterType<TokenService>().As<ITokenService>().InstancePerLifetimeScope();
        builder.RegisterType<UnitOfWork<DataContext>>().As<IUnitOfWork<DataContext>>().InstancePerLifetimeScope();
    }

    /// <summary>
    /// Adds dispatchers to the Autofac container.
    /// </summary>
    /// <param name="builder">The builder.</param>
    public static void AddDispatchers(this ContainerBuilder builder)
    {
        builder.RegisterType<CommandDispatcher>().As<ICommandDispatcher>();
        builder.RegisterType<Dispatcher>().As<IDispatcher>();
        builder.RegisterType<QueryDispatcher>().As<IQueryDispatcher>();
    }

    /// <summary>
    /// Registers the <see cref="DataContext"/> with the specified connection string in the Autofac container.
    /// </summary>
    /// <param name="builder">The <see cref="ContainerBuilder"/> instance.</param>
    /// <param name="isDevelopment">A boolean value indicating whether the application is running in development mode.</param>
    /// <param name="configuration">The <see cref="IConfiguration"/> instance containing the application's configuration.</param>
    public static void AddDbContext(this ContainerBuilder builder, bool isDevelopment, IConfiguration configuration)
    {
        string connString = configuration.GetConnectionString("DefaultConnection");

        builder.Register(x =>
        {
            DbContextOptionsBuilder<DataContext> optionsBuilder = new();
            optionsBuilder.UseSqlite(connString).UseLoggerFactory(x.Resolve<ILoggerFactory>());
            return new DataContext(optionsBuilder.Options);
        }).InstancePerLifetimeScope();
    }
}
