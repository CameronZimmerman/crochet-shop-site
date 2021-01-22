
import { garments } from '../products/garments.js';
const PRODUCTS = 'products';

export function getAndSeedProducts() {
    let products = JSON.parse(localStorage.getItem(PRODUCTS) || '[]');
    if (products.length === 0) products = garments;
    localStorage.setItem(PRODUCTS, JSON.stringify(products));

    return products;

}


