using Microsoft.EntityFrameworkCore;
using ProductService.Data;
using ProductService.Middleware;
using ProductService.Models.Repositories;

var builder = WebApplication.CreateBuilder(args);

// configure logs
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ProductServiceDBContext>(options =>
                options.UseInMemoryDatabase("ProductServiceDB"));

//Register reporsitory
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<IProductRepository, ProductRepository>();

var app = builder.Build();

app.UseMiddleware<TelemetryLogMiddleware>();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ProductServiceDBContext>();
    DbSeeder.Seed(context);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
        c.RoutePrefix = "api/swagger";
    });
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();

