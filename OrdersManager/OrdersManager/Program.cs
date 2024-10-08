using System.Reflection;
using System.Text.Json.Serialization;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using OrdersManager.Extensions;
using FluentValidation.AspNetCore;
using FluentValidation;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Host
    .UseServiceProviderFactory(new AutofacServiceProviderFactory())
    .ConfigureContainer<ContainerBuilder>((container) =>
    {
        container.RegisterAssemblyTypes(Assembly.GetEntryAssembly()).AsImplementedInterfaces();
        container.AddDbContext(builder.Environment.IsDevelopment(), builder.Configuration);
        container.RegisterMaps();
        container.AddApplicationServices();
        container.AddDispatchers();
    });

builder.Services.AddControllers()
    .AddJsonOptions(opts =>
        {
            JsonStringEnumConverter enumConverter = new ();
            opts.JsonSerializerOptions.Converters.Add(enumConverter);
        });
builder.Services.AddFluentValidationAutoValidation(fv => {
    fv.DisableDataAnnotationsValidation = true;
});
builder.Services.AddValidatorsFromAssembly(Assembly.GetEntryAssembly());

builder.Services.AddApplicationServices();

builder.Services.AddIdentityServices(builder.Configuration);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

WebApplication app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
    .WithOrigins(["http://localhost:4200"])
);

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

using IServiceScope scope = app.Services.CreateScope();
IServiceProvider services = scope.ServiceProvider;

await app.ApplyMigrationAsync();

app.Run();

