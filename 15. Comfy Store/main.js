import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/setupStore.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
  }
};

window.addEventListener("DOMContentLoaded", init);
