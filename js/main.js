import { fetchDummyJSON } from "./dummyjson.js";
import { Product } from "./Product.js";
import { displayProduct } from "./display.js";
import { filterAndSort } from "./filter.js";

const containerDiv = document.querySelector('#container');
const categorySelect = document.getElementById("category");
const priceFilterInput = document.getElementById("priceFilter");
const sortSelect = document.getElementById("sort");

categorySelect.addEventListener("change", applyFilters);
priceFilterInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);

let productsData;
let products = [];
fetchDummyJSON()
  .then(data => {
    productsData = data;    
    for(let i = 0; i < productsData.length; i++) {
        const product = new Product(productsData[i]);
        products.push(product);
    }
    displayProduct(products, containerDiv);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });