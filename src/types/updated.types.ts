// Updated Dashboard Types - Local type definitions
export enum ProductType {
  SIMPLE = "simple",
  VARIABLE = "variable",
  GROUPED = "grouped",
  EXTERNAL = "external",
}

export enum StockStatus {
  INSTOCK = "instock",
  OUTOFSTOCK = "outofstock",
  ONBACKORDER = "onbackorder",
}

export enum ProductStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  slug?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex: boolean;
  noFollow: boolean;
}

export interface ProductImage {
  url: string;
  altText?: string;
  position: number;
}

export interface ProductFilters {
  search?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  bestSeller?: boolean;
  status?: ProductStatus;
  tags?: string[];
  gsm?: string;
  size?: string;
  sortBy?: "name" | "price" | "rating" | "createdAt" | "updatedAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface ProductStats {
  totalProducts: number;
  activeProducts: number;
  draftProducts: number;
  outOfStockProducts: number;
  lowStockProducts: number;
  bestSellers: number;
  averageRating: number;
  totalReviews: number;
}

// Base Product Interface - Contains all possible fields
export interface BaseProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  sku: string;
  type: ProductType;
  price: number;
  salePrice?: number;
  originalPrice?: number;
  currency: string;
  stockQuantity: number;
  stockStatus: StockStatus;
  inStock: boolean;
  weight?: number;
  dimensions?: ProductDimensions;
  gsm?: string;
  size?: string;
  sheets?: string;
  rating: number;
  reviews: number;
  features: string[];
  applications: string[];
  seo?: SEOData;
  isActive: boolean;
  bestSeller: boolean;
  manageStock: boolean;
  allowBackorders: boolean;
  status: ProductStatus;
  categories: string[];
  tags: string[];
  brand?: string;
  attributes: string[];
  variations?: string[];
  images: ProductImage[];
  createdAt: Date;
  updatedAt: Date;
}

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
