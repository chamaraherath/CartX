import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  private apiUrl = '/api/v1/products';

  getProducts(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(this.apiUrl);
  }
}
