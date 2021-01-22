import { garments } from './garments.js';
import { renderGarments } from './garments-render.js';
import { updateCartCount } from '../utils.js';

updateCartCount();

const productsUl = document.getElementById('product-list');

for (const garment of garments) {
    const newGarment = renderGarments(garment);
    productsUl.append(newGarment);
}

