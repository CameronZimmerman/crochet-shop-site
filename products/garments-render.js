
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

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    garmentLi.append(textContainer);

    const garmentCategoryP = document.createElement('p');
    garmentCategoryP.classList.add('item-category');
    garmentCategoryP.textContent = `Category: ${garment.category}`;
    textContainer.append(garmentCategoryP);

    const garmentPriceP = document.createElement('p');
    garmentPriceP.classList.add('item-price');
    garmentPriceP.textContent = `Price: $${garment.price}`;
    textContainer.append(garmentPriceP);

    const garmentDescriptionP = document.createElement('p');
    garmentDescriptionP.classList.add('item-description');
    garmentDescriptionP.textContent = garment.description;
    textContainer.append(garmentDescriptionP);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.classList.add('add-button');
    garmentLi.append(addButton);


    return garmentLi;
}