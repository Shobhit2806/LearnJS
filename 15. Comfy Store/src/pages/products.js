import displayProducts from "../displayProducts.js";
import { getStorageItem } from "../utils.js";

const productContainer = document.querySelector(".products-container");

const init = () => {
  const products = getStorageItem("products");
  displayProducts(products, productContainer);
};

init();
