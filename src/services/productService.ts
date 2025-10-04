import api from './api';
import { ApiResponse, Product, ProductFilters } from '../types';

export const productService = {
  // Get all products with filters
  async getProducts(filters?: ProductFilters, page: number = 1, limit: number = 20): Promise<ApiResponse<any>> {
    const params = new URLSearchParams();
    
    if (filters?.search) params.append('search', filters.search);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.brand) params.append('brand', filters.brand);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.inStock !== undefined) params.append('inStock', filters.inStock.toString());
    if (filters?.rating) params.append('rating', filters.rating.toString());
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);
    
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    const response = await api.get<any>(`/products?${params.toString()}`);
    return response;
  },

  // Get single product by ID
  async getProduct(id: string): Promise<ApiResponse<{ product: Product }>> {
    const response = await api.get<{ product: Product }>(`/products/${id}`);
    return response;
  },

  // Create new product
  async createProduct(productData: any): Promise<ApiResponse<{ product: Product }>> {
    const response = await api.post<{ product: Product }>('/products', productData);
    return response;
  },

  // Update product
  async updateProduct(id: string, productData: any): Promise<ApiResponse<{ product: Product }>> {
    const response = await api.put<{ product: Product }>(`/products/${id}`, productData);
    return response;
  },

  // Delete product
  async deleteProduct(id: string): Promise<ApiResponse<{ message: string }>> {
    const response = await api.delete<{ message: string }>(`/products/${id}`);
    return response;
  },

  // Upload product images
  async uploadProductImages(id: string, images: File[]): Promise<ApiResponse<any>> {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    const response = await api.post<any>(`/products/${id}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
}; 