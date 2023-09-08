import { singleProductUrl } from "../utils.js";

const SingleProductContainer = document.querySelector(".single-product-body");

const Product = async () => {
  let productId = window.location.search;
  console.log(productId);
  try {
    const result = await fetch(singleProductUrl + productId);
    const json = await result.json();
    const { name, description, price, image, company } = json.fields;
    const imageURL = image[0].thumbnails.large.url;
    SingleProductContainer.innerHTML = ` <div class="product-page-container">
    <div class="single-product-img">
      <img
        src="${imageURL}"
        alt=""
      />
    </div>
    <div class="single-product-content">
      <h3 class="single-product-title">${name}</h3>
      <p class="single-product-company">BY ${company}</p>
      <p class="single-product-price">${price}</p>
      <div class="colors"></div>
      <p class="single-product-desc">
       ${description}
      </p>
      <button>Add To Cart</button>
    </div>
  </div>`;

    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

Product();
