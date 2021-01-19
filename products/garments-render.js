
export function renderGarments(garment) {
    const garmentLi = document.createElement('li');

    const garmentH3 = document.createElement('h3');
    garmentH3.classList.add('item-name');
    garmentH3.textContent = garment.name;
    garmentLi.append(garmentH3);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    garmentLi.append(imgContainer);

    const garmentImg = document.createElement('img');
    garmentImg.src = garment.image;
    garmentImg.alt = garment.description;
    imgContainer.append(garmentImg);

    const garmentCategoryP = document.createElement('p');
    garmentCategoryP.classList.add('item-category');
    garmentCategoryP.textContent = `Category: ${garment.category}`;
    garmentLi.append(garmentCategoryP);

    const garmentPriceP = document.createElement('p');
    garmentPriceP.classList.add('item-price');
    garmentPriceP.textContent = `Price: $${garment.price}`;
    garmentLi.append(garmentPriceP);

    const garmentDescriptionP = document.createElement('p');
    garmentDescriptionP.classList.add('item-description');
    garmentDescriptionP.textContent = garment.description;
    garmentLi.append(garmentDescriptionP);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.classList.add('add-button');
    garmentLi.append(addButton);


    return garmentLi;
}