//import functions

import { cartData } from './cart-data.js';
import { renderCartRow } from './render-cart-row.js';
import { garments } from '../products/garments.js';
import { findByID, calcOrderTotal } from '../utils.js';

//grab dom elements

const table = document.querySelector('table');

for (const cartItem of cartData) {
    const garment = findByID(cartItem.id, garments);

    const newTr = renderCartRow(cartItem, garment);
    table.append(newTr);
}

const totalTr = document.createElement('tr');

const totalTd1 = document.createElement('td');
const totalTd2 = document.createElement('td');
const totalTd3 = document.createElement('td');
totalTr.append(totalTd1, totalTd2, totalTd3);

totalTd1.textContent = 'Total:';
totalTd3.textContent = `$${calcOrderTotal(cartData, garments)}`;

table.append(totalTr);
