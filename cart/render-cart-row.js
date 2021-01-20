import { cartData } from './cart-data.js';
import { garments } from '../products/garments.js';
 
export function renderCartRow(cartItem, garment) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = garment.name;
    tr.append(tdName);

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    tr.append(tdQuantity);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${garment.price}`;
    tr.append(tdPrice);

    return tr;

}