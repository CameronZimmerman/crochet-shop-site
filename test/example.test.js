// IMPORT MODULES under test here:
import { garments } from '../products/garments.js';
import { renderGarments } from '../products/garments-render.js';
 
const test = QUnit.test;

//render function test
test('given obj, return correctly filled HTML string ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>
    <h3 class="item-name">Mittens</h3>
    <div class="img-container">
        <img src="../assets/mittens.png" alt="a warm cozy pair of mittens">
    </div>           
    <p class="item-category">Category: clothing</p>
    <p class="item-price">Price: $10</p>
    <p class="item-description">a warm cozy pair of mittens</p>
    <button class="add-button">Add to cart</button>
</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGarments(garments[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
