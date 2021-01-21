// IMPORT MODULES under test here:
import { renderGarments } from '../products/garments-render.js';
import { findByID, calcItemTotal, calcOrderTotal } from '../utils.js';
import { renderCartRow } from '../cart/render-cart-row.js';
import { getCart } from '../cart/cart-api.js';
 
const test = QUnit.test;

//for find by ID test
const garments = [
    {
        id : 1,
        name : 'Mittens',
        image : '../assets/mittens.png',
        description : 'A warm and cozy pair of mittens!',
        category : 'clothing',
        price : 15
    },

    {
        id : 2,
        name : 'Hat',
        image : '../assets/hat.png',
        description : 'A warm and cozy crochet beanie.',
        category : 'clothing',
        price : 20
    },

    {
        id : 3,
        name : 'Headband',
        image : '../assets/headband.png',
        description : 'A stylish and warm headband.',
        category : 'clothing',
        price : 10
    },

    {
        id : 4,
        name : 'Mike',
        image : '../assets/mike.png',
        description : 'Michael Wazowski also known as Mike, is a main character in Monsters, Inc.',
        category : 'other',
        price : 2319
    },

    {
        id : 5,
        name : 'Scarf',
        image : '../assets/scarf.png',
        description : 'A long and luxurious crochet scarf!',
        category : 'clothing',
        price : 30
    },

    {
        id : 6,
        name : 'Sweater',
        image : '../assets/sweater.png',
        description : 'A charming and warm oversized sweater.',
        category : 'clothing',
        price : 15
    },
];

const testCart = [
    {
        id: 1,
        quantity: 1
    },
    {
        id: 4,
        quantity: 50
    },
    {
        id: 3,
        quantity: 2
    }
];

const testCart2 = [
    {
        id: 1,
        quantity: 2
    },
    {
        id: 4,
        quantity: 50
    },
    {
        id: 3,
        quantity: 2
    }
];

const testCart3 = [
    {
        id: 1,
        quantity: 2
    },
    {
        id: 4,
        quantity: 50
    },
    {
        id: 3,
        quantity: 2
    }, 
    {
        id: 2,
        quantity: 1
    }
];


localStorage.setItem('testCart', JSON.stringify(testCart));
localStorage.setItem('testCart2', JSON.stringify(testCart2));
localStorage.setItem('testCart3', JSON.stringify(testCart3));


//render products function test
test('given obj, return correct dom Element ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3 class="item-name">Mittens</h3><div class="img-container"><img src="../assets/mittens.png" alt="A warm and cozy pair of mittens!"></div><div class="text-container"><p class="item-category">Category: clothing</p><p class="item-price">Price: $15</p><p class="item-description">A warm and cozy pair of mittens!</p></div><button class="add-button">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGarments(garments[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//findByID function test
test('given an ID and an array, return corresponding obj from arr with same ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = garments[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findByID(1, garments);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//calcItemTotal test
test('given a quantity and price, return total amount ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(findByID(1, testCart).quantity, findByID(1, garments).price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//render cart row function
test('given cart item id and garment array, return correct dom element ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Mittens</td><td>1</td><td>$15</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCartRow(testCart[0], garments[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//calcOrderTotal function test
test('given a cart arr and garment arr, return order total for cart', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 115985;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(testCart, garments);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//get cart test
test('given a key of cart, if cart return cart, if not return empty arr', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = JSON.parse(localStorage.getItem('testCart'));
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart('testCart');

    //Expect
    // Make assertions about what is expected versus the actual result

    const expected2 = [];
    const actual2 = getCart('bagel');

    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);

});

//add to cart test
test('given a product item and a cart, add item to cart/increment quantity', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = JSON.parse(localStorage.getItem('testCart2'));
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addToCart(garments[0], 'testCart');

    //Expect
    // Make assertions about what is expected versus the actual result

    const expected2 = JSON.parse(localStorage.getItem('testCart3'));
    const actual2 = addToCart(garments[1], 'testCart');

    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);

});

