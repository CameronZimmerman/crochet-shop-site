import { getCart } from './cart/cart-api.js';

const CART = 'cart';
const cartCountSpan = document.getElementById('cart-amount');

const cartData = getCart(CART);

cartCountSpan.textContent = cartData.length;