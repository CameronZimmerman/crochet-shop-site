// IMPORT MODULES under test here:
import { renderGarments } from '../products/garments-render.js';
import { findByID, calcItemTotal } from '../utils.js';
 
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
        name : 'Blanket',
        image : '../assets/mittens.png',
        description : 'A warm and cozy pair of mittens!',
        category : 'clothing',
        price : 15 
    }

];

const cart = [
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

//render function test
test('given obj, return correctly filled HTML string ', (expect) => {
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
    const actual = calcItemTotal(findByID(1, cart).quantity, findByID(1, garments).price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

