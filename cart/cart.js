//import functions

import { cartData } from './cart-data.js';
import { renderCartRow } from './render-cart-row.js';
import { garments } from '../products/garments.js';
import { findByID } from '../utils.js';

//grab dom elements

const table = document.querySelector('table');

for (const cartItem of cartData) {
    const garment = findByID(cartItem.id, garments);

    const newTR = renderCartRow(cartItem, garment);
    table.append(newTR);
}
