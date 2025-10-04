import api from './api';
import { ApiResponse, Customer, CustomerFilters } from '../types';

export const customerService = {
  async getCustomers(filters?: CustomerFilters): Promise<ApiResponse<{ customers: Customer[]; totalPages: number }>> {
    try {
      const params = new URLSearchParams();
      if (filters?.search) params.append('search', filters.search);
      if (filters?.status) params.append('status', filters.status);
      if (filters?.page) params.append('page', filters.page.toString());
      if (filters?.limit) params.append('limit', filters.limit.toString());

      const response = await api.get<any>(`/customers?${params.toString()}`);
      return response;
    } catch (error: any) {
      return { success: false, errors: [error.response?.data?.message || 'Failed to fetch customers'] };
    }
  },

  async getCustomer(id: string): Promise<ApiResponse<Customer>> {
    try {
      const response = await api.get<Customer>(`/customers/${id}`);
      return response;
    } catch (error: any) {
      return { success: false, errors: [error.response?.data?.message || 'Failed to fetch customer'] };
    }
  },

  async createCustomer(customerData: Partial<Customer>): Promise<ApiResponse<Customer>> {
    try {
      const response = await api.post<Customer>('/customers', customerData);
      return response;
    } catch (error: any) {
      return { success: false, errors: [error.response?.data?.message || 'Failed to create customer'] };
    }
  },

  async updateCustomer(id: string, customerData: Partial<Customer>): Promise<ApiResponse<Customer>> {
    try {
      const response = await api.put<Customer>(`/customers/${id}`, customerData);
      return response;
    } catch (error: any) {
      return { success: false, errors: [error.response?.data?.message || 'Failed to update customer'] };
    }
  },

  async deleteCustomer(id: string): Promise<ApiResponse<void>> {
    try {
      await api.delete(`/customers/${id}`);
      return { success: true };
    } catch (error: any) {
      return { success: false, errors: [error.response?.data?.message || 'Failed to delete customer'] };
    }
  },
}; 