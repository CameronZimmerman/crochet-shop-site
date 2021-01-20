import { garments } from './garments.js';
import { renderGarments } from './garments-render.js';

const productsUl = document.getElementById('product-list');

for (const garment of garments) {
    const newGarment = renderGarments(garment);
    productsUl.append(newGarment);
}