import { CSSProperties } from 'react';

/
 * Utility functions for GlamCS application
 * @module utils
 */

/
 * Represents the styling options for GlamCS components.
 */
export interface GlamCSStyles {
    container: CSSProperties;
    header: CSSProperties;
    button: CSSProperties;
}

/
 * Represents a product in the GlamCS cosmetics line.
 */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

/
 * Generates a class name string based on the provided conditions.
 * @param baseClass - The base class name
 * @param conditions - An object with conditions as keys and class names as values
 * @returns The combined class name string
 * @example
 * const className = cn('button', { 'is-active': isActive, 'is-large': isLarge });
 */
export const cn = (baseClass: string, conditions: Record<string, boolean>): string => {
    return Object.entries(conditions)
        .filter(([_, value]) => value)
        .reduce((acc, [key]) => ${acc} ${key}, baseClass)
        .trim();
};

/
 * Formatter function to convert a price to a currency string.
 * @param price - The price to format
 * @returns A formatted price string
 * @example
 * const formattedPrice = formatPrice(25.99); // "$25.99"
 */
export const formatPrice = (price: number): string => {
    return $${price.toFixed(2)};
};

/
 * GlamCS-specific styles for modern, high-end cosmetics presentation.
 */
export const glamCSStyles: GlamCSStyles = {
    container: {
        backgroundColor: 'white',
        color: 'orange',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 30px rgba(255, 165, 0, 0.5)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 40px rgba(255, 165, 0, 0.7)',
        },
    },
    header: {
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: 'orange',
    },
    button: {
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: 'rgba(255, 165, 0, 0.8)',
        },
    },
};