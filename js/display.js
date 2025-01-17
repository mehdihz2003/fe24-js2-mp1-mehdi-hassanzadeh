export function displayProduct(products, containerDiv) {
    containerDiv.innerHTML = '';

    for(const product of products) {
        const data = product.GetData();
        
        const container = document.createElement('div');
        container.classList.add('result-container');

        const img = document.createElement('img');
        img.src = data.imageURL;
        img.classList.add('result-image');

        const info = document.createElement('div');
        info.classList.add('result-info');

        const title = document.createElement('h4');
        title.textContent = data.title;

        const stock = document.createElement('h5');
        stock.textContent = `Stock: ${data.stock}`;

        const price = document.createElement('h5');
        price.textContent = `Price: $${product.GetDiscountPrice()}` ;

        info.append(title, stock, price);

        container.append(img, info);

        containerDiv.append(container);
    }
}