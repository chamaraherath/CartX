import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [{
    id: 1,
    name: "Dave's Killer Bread 21 Whole Grains and Seeds",
    brand: "Dave's Killer Bread",
    category: "Breads",
    price: 5.99,
    description: "Organic bread packed with 21 whole grains and seeds.",
    imageUrl: "https://m.media-amazon.com/images/I/81tNeQX7bGL.jpg"
  },
  {
    id: 2,
    name: "Nature's Own 100% Whole Wheat Bread",
    brand: "Nature's Own",
    category: "Breads",
    price: 3.49,
    description: "Soft, nutritious whole wheat bread with no artificial preservatives.",
    imageUrl: "https://cdn.gardengrocer.com/attachments/photos/high_res/4103.jpg?2111"
  },
  {
    id: 3,
    name: "Pepperidge Farm Rye Bread",
    brand: "Pepperidge Farm",
    category: "Breads",
    price: 4.29,
    description: "Hearty rye bread with a rich, robust flavor.",
    imageUrl: "https://d13jicmd7uan86.cloudfront.net/d51d8417-4eaa-4cc7-a101-b1490053da09/725?format=webp"
  },
  // Vegetables Category
  {
    id: 4,
    name: "Great Value Steamable California Style Vegetable Mix",
    brand: "Great Value",
    category: "Vegetables",
    price: 2.99,
    description: "A mix of broccoli, cauliflower, and carrots, ready to steam.",
    imageUrl: "https://i5.walmartimages.com/asr/4965b44b-d7c1-4714-96aa-5bab328cf176.f446c946f8892a1799264540713146d5.jpeg"
  },
  {
    id: 5,
    name: "SPAR Choice Grade Mixed Vegetables",
    brand: "SPAR",
    category: "Vegetables",
    price: 1.99,
    description: "A selection of diced carrots, green beans, sweetcorn, and peas.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_4hKvraGWmUu8BhSZ_vOV1jxr4E5BMjZ0w&s"
  },
  // Fruits Category
  {
    id: 6,
    name: "Chiquita Bananas",
    brand: "Chiquita",
    category: "Fruits",
    price: 0.59,
    description: "Fresh, ripe bananas perfect for snacking and baking.",
    imageUrl: "https://www.chiquita.com/wp-content/uploads/2020/01/Chiquita_Organicsbananas_US_Yellow.jpg"
  },
  {
    id: 7,
    name: "Halos Mandarins",
    brand: "Wonderful Halos",
    category: "Fruits",
    price: 3.99,
    description: "Sweet, seedless, and easy to peel mandarins.",
    imageUrl: "https://www.wonderful.com/static/images/brands/halos/halos_banner_2019.png"
  },
  // Dairy Category
  {
    id: 8,
    name: "Horizon Organic Whole Milk",
    brand: "Horizon Organic",
    category: "Dairy",
    price: 4.99,
    description: "Rich and creamy organic whole milk.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YnBNSkD988fG70sCCZm5eRzqWvObQczyfQ&s"
  },
  {
    id: 9,
    name: "Cabot Whipped Cream",
    brand: "Cabot",
    category: "Dairy",
    price: 2.99,
    description: "Deliciously rich whipped cream, perfect for desserts.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0glCMcstRT_C3pWRZwi-17PVWaMbqVm1h_g&s"
  },
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
