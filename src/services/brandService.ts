import api from './api';
import { ApiResponse, Brand } from '../types';

export const brandService = {
  // Get all brands
  async getBrands(): Promise<ApiResponse<Brand[]>> {
    const response = await api.get<Brand[]>('/brands');
    return response;
  },

  // Get brand by ID
  async getBrand(id: string): Promise<ApiResponse<Brand>> {
    const response = await api.get<Brand>(`/brands/${id}`);
    return response;
  },

  // Create new brand
  async createBrand(brandData: Partial<Brand>): Promise<ApiResponse<Brand>> {
    const response = await api.post<Brand>('/brands', brandData);
    return response;
  },

  // Update brand
  async updateBrand(id: string, brandData: Partial<Brand>): Promise<ApiResponse<Brand>> {
    const response = await api.put<Brand>(`/brands/${id}`, brandData);
    return response;
  },

  // Delete brand
  async deleteBrand(id: string): Promise<ApiResponse<void>> {
    const response = await api.delete<void>(`/brands/${id}`);
    return response;
  },
}; 
