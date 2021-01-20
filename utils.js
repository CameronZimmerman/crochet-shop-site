export function findByID(id, array) {

    for (const item of array) {
        if (item.id === id) return item;
    }
    return;
}

export function calcItemTotal(quantity, price) {
    return quantity * price; 
}