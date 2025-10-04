import api from './api';
import { ApiResponse, Category } from '../types';

export const categoryService = {
  // Get all categories
  async getCategories(): Promise<ApiResponse<Category[]>> {
    const response = await api.get<Category[]>('/categories');
    return response;
  },

  // Get category by ID
  async getCategory(id: string): Promise<ApiResponse<Category>> {
    const response = await api.get<Category>(`/categories/${id}`);
    return response;
  },

  // Create new category
  async createCategory(categoryData: Partial<Category>): Promise<ApiResponse<Category>> {
    const response = await api.post<Category>('/categories', categoryData);
    return response;
  },

  // Update category
  async updateCategory(id: string, categoryData: Partial<Category>): Promise<ApiResponse<Category>> {
    const response = await api.put<Category>(`/categories/${id}`, categoryData);
    return response;
  },

  // Delete category
  async deleteCategory(id: string): Promise<ApiResponse<void>> {
    const response = await api.delete<void>(`/categories/${id}`);
    return response;
  },
}; 
