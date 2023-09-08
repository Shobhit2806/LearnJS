import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl);
  const json = await response.json();
  console.log(response);
  return json;  
};

export default fetchProducts;
