using Microsoft.AspNetCore.Mvc;
using ProductService.Models;
using ProductService.Models.Repositories;

namespace ProductService.Controllers
{

    [Route("api/v1/products")]
    [ApiController]
    public class ProductController(IProductRepository productRepository, ILogger<ProductController> _logger) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Products()
        {
            _logger.LogInformation("Get all products");
            var products = await productRepository.GetAllAsync();
            return Ok(products);
        }
    }
}