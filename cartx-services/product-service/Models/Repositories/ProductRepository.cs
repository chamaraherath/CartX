using ProductService.Data;

namespace ProductService.Models.Repositories
{
    public class ProductRepository(ProductServiceDBContext context) : Repository<Product>(context), IProductRepository
    {
    }
}