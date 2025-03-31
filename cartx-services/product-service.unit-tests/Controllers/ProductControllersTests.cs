using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ProductService.Controllers;
using ProductService.Models;
using ProductService.Models.Repositories;

namespace ProductService.UnitTests.Controllers
{

    [TestClass]
    public class ProducControllerTests
    {
        private Mock<IProductRepository> _productRepositoryMock;
        private Mock<ILogger<ProductController>> _loggerMock;
        private ProductController _productController;

        [TestInitialize]
        public void Setup()
        {
            _productRepositoryMock = new Mock<IProductRepository>();
            _loggerMock = new Mock<ILogger<ProductController>>();
            _productController = new ProductController(_productRepositoryMock.Object, _loggerMock.Object);
        }

        [TestMethod]
        public async Task Products_ReturnsOkResults_WithListOfProducts()
        {
            // Arrange
            var products = new List<Product> {
                new Product { Id = 1, Name = "Product 1", Price = 10 },
                new Product { Id = 2, Name = "Product 2", Price = 20 }
            };

            _productRepositoryMock.Setup(x => x.GetAllAsync()).ReturnsAsync(products);

            // Act
            var result = await _productController.Products();

            // Assert
            var okResults = result.Result as OkObjectResult;
            Assert.IsNotNull(okResults);
            Assert.AreEqual(200, okResults.StatusCode);

            var productsResult = okResults.Value as IEnumerable<Product>;
            Assert.IsNotNull(productsResult);
            Assert.AreEqual(2, productsResult.Count());
        }
    }
}