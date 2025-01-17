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
            category: this.#category,
            rating: this.#rating,
        };
    }

    GetDiscountPrice() {
        return this.#calcDiscount();
    }

    #calcDiscount() {
        return this.#price * (1 - this.#discount/100)
    }

    updateStock() {
        this.#stock--;
    }

}