//import functions

import { renderCartRow } from './render-cart-row.js';
import { findByID, calcOrderTotal } from '../utils.js';
import { clearCart, getCart } from '../cart/cart-api.js';
import { getAndSeedProducts } from '../admin/products-api.js';

const garments = getAndSeedProducts();

const CART = 'cart';
// grab storage data
const cartData = getCart(CART);

//grab dom elements

const table = document.querySelector('table');
const orderButton = document.getElementById('order-button');
const clearCartButton = document.getElementById('clear-cart-button');

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

if (cartData.length === 0) orderButton.disabled = true;
else orderButton.disabled = false;

orderButton.addEventListener('click', () => {
    const parsedCart = JSON.stringify(cartData, true, 2);
    alert(`Thank you for your order! you ordered ` + parsedCart);
    clearCart(CART);
});

clearCartButton.addEventListener('click', () => {
    clearCart(CART);
});
