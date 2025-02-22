using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Data
{
    public class ProductServiceDBContext : DbContext
    {
        public ProductServiceDBContext(DbContextOptions<ProductServiceDBContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}