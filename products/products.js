import { renderGarments } from './garments-render.js';
import { updateCartCount } from '../utils.js';
import { getAndSeedProducts } from '../admin/products-api.js';

updateCartCount();

const garments = getAndSeedProducts();
const productsUl = document.getElementById('product-list');

for (const garment of garments) {
    const newGarment = renderGarments(garment);
    productsUl.append(newGarment);
}

