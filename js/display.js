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

        const price = document.createElement('h5');
        price.textContent = `Price: $${product.GetDiscountPrice().toFixed(2)}`;

        const stock = document.createElement('h5');
        stock.textContent = `Stock: ${data.stock}`;

        const btn = document.createElement('button');
        btn.textContent = 'Add to cart';
        btn.classList.add('result-button');
        btn.addEventListener('click', event => {
            product.updateStock();
            stock.textContent = `Stock: ${product.GetStock()}`;
        })

        info.append(title, price, stock);

        container.append(img, info, btn);

        containerDiv.append(container);
    }
}