using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Data
{
    public static class DbSeeder
    {
        public static void Seed(ProductServiceDBContext context)
        {
            if (!context.Products.Any())
            {
                context.Products.AddRange(new List<Product>
                {
                    // Breads Category
                    new Product { Id = 1, Name = "Dave's Killer Bread 21 Whole Grains and Seeds", Brand = "Dave's Killer Bread", Category = "Breads", Price = 1.00m, Description = "Organic bread packed with 21 whole grains and seeds.", ImageUrl = "https://m.media-amazon.com/images/I/81tNeQX7bGL.jpg" },
                    new Product { Id = 2, Name = "Nature's Own 100% Whole Wheat Bread", Brand = "Nature's Own", Category = "Breads", Price = 3.49m, Description = "Soft, nutritious whole wheat bread with no artificial preservatives.", ImageUrl = "https://cdn.gardengrocer.com/attachments/photos/high_res/4103.jpg?2111" },
                    new Product { Id = 3, Name = "Pepperidge Farm Rye Bread", Brand = "Pepperidge Farm", Category = "Breads", Price = 4.29m, Description = "Hearty rye bread with a rich, robust flavor.", ImageUrl = "https://d13jicmd7uan86.cloudfront.net/d51d8417-4eaa-4cc7-a101-b1490053da09/725?format=webp" },

                    // Vegetables Category
                    new Product { Id = 4, Name = "Great Value Steamable California Style Vegetable Mix", Brand = "Great Value", Category = "Vegetables", Price = 2.99m, Description = "A mix of broccoli, cauliflower, and carrots, ready to steam.", ImageUrl = "https://i5.walmartimages.com/asr/4965b44b-d7c1-4714-96aa-5bab328cf176.f446c946f8892a1799264540713146d5.jpeg" },
                    new Product { Id = 5, Name = "SPAR Choice Grade Mixed Vegetables", Brand = "SPAR", Category = "Vegetables", Price = 1.99m, Description = "A selection of diced carrots, green beans, sweetcorn, and peas.", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_4hKvraGWmUu8BhSZ_vOV1jxr4E5BMjZ0w&s" },

                    // Fruits Category
                    new Product { Id = 6, Name = "Chiquita Bananas", Brand = "Chiquita", Category = "Fruits", Price = 0.59m, Description = "Fresh, ripe bananas perfect for snacking and baking.", ImageUrl = "https://www.chiquita.com/wp-content/uploads/2020/01/Chiquita_Organicsbananas_US_Yellow.jpg" },
                    new Product { Id = 7, Name = "Halos Mandarins", Brand = "Wonderful Halos", Category = "Fruits", Price = 3.99m, Description = "Sweet, seedless, and easy to peel mandarins.", ImageUrl = "https://www.wonderful.com/static/images/brands/halos/halos_banner_2019.png" },

                    // Dairy Category
                    new Product { Id = 8, Name = "Horizon Organic Whole Milk", Brand = "Horizon Organic", Category = "Dairy", Price = 4.99m, Description = "Rich and creamy organic whole milk.", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YnBNSkD988fG70sCCZm5eRzqWvObQczyfQ&s" },
                    new Product { Id = 9, Name = "Cabot Whipped Cream", Brand = "Cabot", Category = "Dairy", Price = 2.99m, Description = "Deliciously rich whipped cream, perfect for desserts.", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0glCMcstRT_C3pWRZwi-17PVWaMbqVm1h_g&s" }
                });

                context.SaveChanges();
            }
        }
    }
}
