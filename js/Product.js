export class Product{
    #title;
    #imageURL;
    #stock;
    #price;
    #discount;
    #category;
    #rating;

    constructor(data) {
        this.#title = data.title;
        this.#imageURL = data.images[0];
        this.#stock = data.stock;
        this.#price = data.price;
        this.#discount = data.discountPercentage;
        this.#category = data.category;
        this.#rating = data.rating;
    }
    
    GetData() {
        return {
            title: this.#title,
            imageURL: this.#imageURL,
            stock: this.#stock,
            price: this.#price,
            discount: this.#discount,
            category: this.#category,
            rating: this.#rating,
        };
    }

    #calcDiscount() {
        this.#price = this.#price * (1 - this.#discount)
    }

    updateStock() {
        this.#stock--;
    }

}