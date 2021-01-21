export function getCart(key) {
    const cart = JSON.parse(localStorage.getItem(key) || '[]');
    console.log(cart);
    return cart;
}