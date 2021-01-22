import { findByID } from '../utils.js';

export function getCart(cartKey) {
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    return cart;
}
export function addToCart(garment, cartKey, inputElementQuantity) {
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    const matchingCartItem = (findByID(garment.id, cart) !== null) ? findByID(garment.id, cart) : null;

    const newLineItem = {
        id: garment.id,
        quantity: inputElementQuantity
    };

    if (matchingCartItem) matchingCartItem.quantity += inputElementQuantity; 
    else cart.push(newLineItem);

    localStorage.setItem(cartKey, JSON.stringify(cart));
    const newCart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    return newCart;
}

export function clearCart(cartKey) {
    localStorage.removeItem(cartKey);
    return localStorage.getItem(cartKey);
}