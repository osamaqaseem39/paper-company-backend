// Updated Dashboard Types - Importing shared types from backend
import { 
  BaseProduct, 
  DashboardProduct, 
  ProductType, 
  StockStatus, 
  ProductStatus, 
  ProductDimensions, 
  SEOData, 
  ProductImage, 
  ProductFilters, 
  ProductStats,
  CartItem as BaseCartItem
} from "../../../ecommerce-nest/src/common/types/product.types";

// Re-export shared types for convenience
export {
  ProductType,
  StockStatus,
  ProductStatus,
  ProductDimensions,
  SEOData,
  ProductImage,
  ProductFilters,
  ProductStats
};

// User Types
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: "user" | "moderator" | "admin";
  isActive: boolean;
  profileImage?: string;
  addresses: Address[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  _id: string;
  type: "shipping" | "billing";
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  street?: string; // Alias for addressLine1
  city: string;
  state: string;
  postalCode: string;
  zipCode?: string; // Alias for postalCode
  country: string;
  phone: string;
  isDefault: boolean;
}

// Product Types - Using shared BaseProduct
export interface Product extends BaseProduct {
  // Dashboard-specific computed fields
  categoryName?: string;
  brandName?: string;
  totalVariants?: number;
  lowStock?: boolean;
  // Legacy fields for backward compatibility
  categoryId?: string | Category;
  brandId?: string | Brand;
  variants?: ProductVariant[];
  category?: Category; // Alias for categoryId
}

export interface ProductVariant {
  _id: string;
  sku: string;
  name: string;
  price: number;
  comparePrice?: number;
  costPrice: number;
  stockQuantity: number;
  weight: number;
  dimensions: ProductDimensions;
  attributes: Record<string, string>;
  isActive: boolean;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  image?: string;
  isActive: boolean;
  children?: Category[];
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  mainCompany?: string;
  level: "main" | "sub";
  industry?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
