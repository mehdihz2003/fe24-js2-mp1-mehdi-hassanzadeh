import { fetchDummyJSON } from "./dummyjson.js";
import { Product } from "./Product.js";

let productsData;
fetchDummyJSON()
  .then(data => {
    productsData = data;
    console.log(productsData);
    
    for(let i = 0; i < productsData.length; i++) {
        const product = new Product(productsData[i]);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
