// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar mais interfaces (User, Order, Category, etc)
// 2. Adicionar validação com Zod ou Yup
// 3. Adicionar tipos para requests/responses da API
// 4. Adicionar enums para categorias/status
// 5. Adicionar tipos utilitários (Partial, Pick, Omit)
// 6. Adicionar JSDoc comments
// 7. Adicionar readonly properties onde apropriado
// 8. Adicionar optional properties
// 9. Adicionar union types para variantes
// 10. Adicionar generic types para reusabilidade

export interface Rating {
  rate: number; // MODIFICAÇÃO: Adicionar validação min: 0, max: 5
  count: number; // MODIFICAÇÃO: Adicionar validação min: 0
}

export interface Product {
  id: number;
  title: string; // MODIFICAÇÃO: Adicionar maxLength validation
  price: number; // MODIFICAÇÃO: Adicionar validação min: 0
  description: string;
  category: string; // MODIFICAÇÃO: Usar enum em vez de string
  image: string; // MODIFICAÇÃO: Validar URL format
  rating: Rating;
  // MODIFICAÇÃO POSSÍVEL: Adicionar campos extras
  // stock?: number;
  // discount?: number;
  // brand?: string;
  // tags?: string[];
  // createdAt?: Date;
  // updatedAt?: Date;
}

// MODIFICAÇÃO POSSÍVEL: Adicionar interface para Cart
// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// MODIFICAÇÃO POSSÍVEL: Adicionar interface para User
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   isStudent: boolean;
//   createdAt: Date;
// }

// MODIFICAÇÃO POSSÍVEL: Adicionar interface para Order
// export interface Order {
//   id: string;
//   userId: string;
//   products: CartItem[];
//   totalCost: number;
//   reference: string;
//   status: 'pending' | 'completed' | 'cancelled';
//   createdAt: Date;
// }

// MODIFICAÇÃO POSSÍVEL: Adicionar enum para categorias
// export enum ProductCategory {
//   ELECTRONICS = "electronics",
//   CLOTHING = "clothing",
//   BOOKS = "books",
//   FOOD = "food",
// }

// MODIFICAÇÃO POSSÍVEL: Adicionar tipos para API responses
// export type ApiResponse<T> = {
//   success: boolean;
//   data?: T;
//   error?: string;
// }

// MODIFICAÇÃO POSSÍVEL: Adicionar validação com Zod
// import { z } from 'zod';
// export const ProductSchema = z.object({
//   id: z.number().positive(),
//   title: z.string().min(1).max(100),
//   price: z.number().positive(),
//   description: z.string(),
//   category: z.string(),
//   image: z.string().url(),
//   rating: z.object({
//     rate: z.number().min(0).max(5),
//     count: z.number().min(0),
//   }),
// });