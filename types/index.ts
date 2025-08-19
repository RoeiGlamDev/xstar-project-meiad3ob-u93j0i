import { Product, Category, User } from './models';

/
 * GlamCS - Types and Interfaces for GlamCS Cosmetics Application
 * This file includes TypeScript types and interfaces tailored for the GlamCS cosmetics website.
 * The design incorporates modern aesthetics with an emphasis on luxury and sophistication.
 * Colors: Orange (#FFA500) and White (#FFFFFF)
 */

// Interface representing a cosmetic product
export interface GlamCSProduct extends Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    category: GlamCSCategory; // Category to which the product belongs
    imageUrl: string; // URL for the product image
    isFeatured: boolean; // Whether the product is featured on the website
    ingredients: string[]; // List of ingredients used in the product
    isVegan: boolean; // Whether the product is vegan
    isCrueltyFree: boolean; // Whether the product is cruelty-free
}

/
 * Interface representing different categories of products within GlamCS
 */
export interface GlamCSCategory extends Category {
    id: string; // Unique identifier for the category
    name: string; // Name of the category (e.g., "Lipstick", "Foundation")
    description: string; // Description of the category
}

/
 * Interface representing a user in the GlamCS cosmetics application
 */
export interface GlamCSUser extends User {
    id: string; // Unique identifier for the user
    username: string; // Username of the user
    email: string; // Email address of the user
    passwordHash: string; // Hashed password for secure authentication
    favorites: GlamCSProduct[]; // List of favorite products
}

/
 * Interface representing the shopping cart in GlamCS
 */
export interface GlamCSShoppingCart {
    userId: string; // ID of the user who owns the cart
    items: CartItem[]; // List of items in the shopping cart
}

/
 * Interface representing an item in the shopping cart
 */
export interface CartItem {
    product: GlamCSProduct; // The product added to the cart
    quantity: number; // Quantity of the product in the cart
}

/
 * Interface representing an order placed by a user
 */
export interface GlamCSOrder {
    orderId: string; // Unique identifier for the order
    userId: string; // ID of the user who placed the order
    products: CartItem[]; // List of products in the order
    totalAmount: number; // Total cost of the order
    orderDate: Date; // Date when the order was placed
    status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'; // Current status of the order
} 

export const glamCSColors = {
    primary: '#FFA500', // Orange
    secondary: '#FFFFFF', // White
};