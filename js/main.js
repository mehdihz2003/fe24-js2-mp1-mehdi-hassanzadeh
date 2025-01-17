import { fetchDummyJSON } from "./dummyjson.js";

let productsData;
fetchDummyJSON()
  .then(data => {
    productsData = data;
    console.log(productsData);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });