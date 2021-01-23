import { isImgString, updateCartCount } from '../utils.js';
import { addProduct, getAndSeedProducts, clearProducts } from './products-api.js';

updateCartCount();
getAndSeedProducts();

let formElement = document.getElementById('admin-form');
const resetButton = document.getElementById('reset-product-button');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let myFormData = new FormData(formElement);

    const newGarment = {
        id: myFormData.get('ID'),
        name: myFormData.get('Name'),
        image: isImgString(myFormData.get('Image')) ? myFormData.get('Image') : '../assets/mike.png',
        description: myFormData.get('Description'),
        category: myFormData.get('Category'),
        price: myFormData.get('Price'),

    };
    addProduct(newGarment);
    formElement.reset();
});

resetButton.addEventListener('click', () => {
    clearProducts();
});

