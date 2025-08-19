import { Colors } from './colors';

/
 * Constants and configuration for GlamCS application
 * This file contains brand-specific constants and configurations 
 * that define the styling and setup for the GlamCS cosmetics website.
 */

export const BRAND_NAME = "GlamCS";

export const COLORS = {
    PRIMARY: Colors.ORANGE,
    SECONDARY: Colors.WHITE,
};

export const FONTS = {
    HEADLINE: "'Lora', serif",
    BODY: "'Roboto', sans-serif",
};

/
 * Interface representing a cosmetic product in the GlamCS catalog.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Configuration for GlamCS products.
 * This includes base information for product listings, pricing, and other key details.
 */
export const PRODUCT_CATALOG: CosmeticProduct[] = [
    {
        id: "1",
        name: "Radiant Glow Foundation",
        description: "Achieve a flawless complexion with our Radiant Glow Foundation. Lightweight and long-lasting.",
        price: 39.99,
        imageUrl: "/images/products/radiant-glow-foundation.png",
        category: "Foundation",
    },
    {
        id: "2",
        name: "Silk Touch Lipstick",
        description: "Luxurious and creamy, our Silk Touch Lipstick provides vibrant color and hydration.",
        price: 24.99,
        imageUrl: "/images/products/silk-touch-lipstick.png",
        category: "Lipstick",
    },
    {
        id: "3",
        name: "Glamorous Eyeshadow Palette",
        description: "A stunning collection of shades to create endless eye-catching looks.",
        price: 49.99,
        imageUrl: "/images/products/glamorous-eyeshadow-palette.png",
        category: "Eyeshadow",
    },
];

export const SOCIAL_MEDIA_LINKS = {
    INSTAGRAM: "https://www.instagram.com/glamcs",
    FACEBOOK: "https://www.facebook.com/glamcs",
    TWITTER: "https://www.twitter.com/glamcs",
};