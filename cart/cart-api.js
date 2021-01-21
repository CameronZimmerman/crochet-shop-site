export function getCart(key) {
    const cart = JSON.parse(localStorage.getItem(key) || '[]');
    return cart;
}