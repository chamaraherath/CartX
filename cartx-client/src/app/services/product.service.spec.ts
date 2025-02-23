import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMoke: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMoke = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMoke.verify(); // Verify that no unmatched requests are outstanding
  });

  it('should be created', () => {
    const dummyProducts: Product[] = [{
      id: 1,
      name: "Dave's Killer Bread 21 Whole Grains and Seeds",
      brand: "Dave's Killer Bread",
      category: "Breads",
      price: 1,
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
    }];

    service.getProducts().subscribe(products => {
      expect(products.length).toBe(3);
      expect(products).toEqual(dummyProducts);
    });

    const request = httpMoke.expectOne('/api/v1/products'); // Verify that a single request has been made which matches the given URL
    expect(request.request.method).toBe('GET');
    request.flush(dummyProducts);
  });
});
