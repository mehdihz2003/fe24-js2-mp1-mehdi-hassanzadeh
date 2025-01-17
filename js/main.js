import { fetchDummyJSON } from "./dummyjson.js";
import { Product } from "./Product.js";
import { displayProduct } from "./display.js";

const containerDiv = document.querySelector('#container');

let productsData;
let products = [];
fetchDummyJSON()
  .then(data => {
    productsData = data;
    console.log(productsData);
    
    for(let i = 0; i < productsData.length; i++) {
        const product = new Product(productsData[i]);
        products.push(product);
    }
    displayProduct(products, containerDiv);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

console.log(products);