import { getCart } from './cart/cart-api.js';

export function findByID(id, array) {

    for (const item of array) {
        if (item.id === id) return item;
    }
    return;
}

export function calcItemTotal(quantity, price) {
    return quantity * price; 
}

export function calcOrderTotal(cart, garments) {
    let total = 0;

    for (const cartItem of cart) {
        let garmentPrice = findByID(cartItem.id, garments).price;
        let cartItemPrice = calcItemTotal(cartItem.quantity, garmentPrice);
        total += cartItemPrice;
    }
    return total;
}

export function updateCartCount() {
    const cartCountSpan = document.getElementById('cart-amount');
    const CART = 'cart';
    const cartData = getCart(CART);

    
    cartCountSpan.textContent = cartData.length;
    
}
