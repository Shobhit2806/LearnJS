const displayProducts = (products, element) => {
  element.innerHTML = products.map((product) => {
    const { name, price, image,id} = product;
    return `  <div class="product-item">
    <div class="img-container">
      <img
        class="product-img"
        src="${image}"
        alt=""
      />
      <div class="product-icons show-icons">
        <div class="product-icon">
        <a href="product.html?id=${id}">
          <i class="fa fa-search"></i>
          </a>
        </div>

        <div class="product-icon">
          <button>
            <i class="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="product-title">${name}</div>
    <div class="product-price">${price}</div>
  </div>`;
  });
};

export default displayProducts;
