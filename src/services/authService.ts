import api from './api';
import { ApiResponse, User, LoginForm, RegisterForm } from '../types';

export const authService = {
  // Login user
  async login(credentials: LoginForm): Promise<ApiResponse<{ user: User; token: string }>> {
    const response = await api.post<{ user: User; token: string }>('/auth/login', credentials);
    return response;
  },

  // Register user
  async register(userData: RegisterForm): Promise<ApiResponse<{ user: User; token: string }>> {
    const response = await api.post<{ user: User; token: string }>('/auth/register', userData);
    return response;
  },

  // Get current user profile
  async getCurrentUser(): Promise<ApiResponse<{ user: User }>> {
    const response = await api.get<{ user: User }>('/auth/me');
    return response;
  },

  // Verify email
  async verifyEmail(token: string): Promise<ApiResponse<{ message: string }>> {
    const response = await api.post<{ message: string }>('/auth/verify-email', { token });
    return response;
  },

  // Forgot password
  async forgotPassword(email: string): Promise<ApiResponse<{ message: string }>> {
    const response = await api.post<{ message: string }>('/auth/forgot-password', { email });
    return response;
  },

  // Reset password
  async resetPassword(token: string, password: string): Promise<ApiResponse<{ message: string }>> {
    const response = await api.post<{ message: string }>('/auth/reset-password', { token, password });
    return response;
  },

  // Change password
  async changePassword(currentPassword: string, newPassword: string): Promise<ApiResponse<{ message: string }>> {
    const response = await api.post<{ message: string }>('/auth/change-password', { currentPassword, newPassword });
    return response;
  },

  // Refresh token
  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    const response = await api.post<{ token: string }>('/auth/refresh-token');
    return response;
  },

  // Logout (client-side)
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
}; 