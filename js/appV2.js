let products = [];
const productQuery = document.querySelector('#catalog');

getProducts()

async function getProducts() {
  let url = "http://makeup-api.herokuapp.com/api/v1/products.json"
  const data = await fetch(url)
  const response = await data.json()
  products = response.map(product => {
    const { name, brand, price } = product;

    return {
      name: product.name,
      brand: product.brand,
      price: product.price
    };
  });
  renderAll();
}

function renderAll() {
  productQuery.innerHTML = renderProducts(products)
}

function renderProducts(products) {
  let studentHtml = `<h5>Users found (${products.length})</h5>`

  products.forEach(product => {
    const { name, brand, price } = product;
    studentHtml += `<div class="product" data-name="${product.name}" data-brand="nyx" data-type="bronzer" tabindex="508">
      <figure class="product-figure">
        <img src="${product.image_link}">
      </figure>
       <section class="product-description">
          <h1 class="product-name">${product.name}</h1>
          <div class="product-brands"><span class="product-brand background-brand">${product.brand}</span>
            <span class="product-brand background-price">R$ ${product.price * 5.50} </span>
          </div>
        </section>
  // CARREGAR OS DETALHES
</div>`;
  });

  return studentHtml;
}


function productItem(product) {
  const item = `<div class="product" data-name="${product.name}" data-brand="nyx" data-type="bronzer" tabindex="508">
      <figure class="product-figure">
        <img src="${product.image_link}">
      </figure>
       <section class="product-description">
          <h1 class="product-name">${product.name}</h1>
          <div class="product-brands"><span class="product-brand background-brand">${product.brand}</span>
            <span class="product-brand background-price">R$ ${product.price * 5.50} </span>
          </div>
        </section>
  // CARREGAR OS DETALHES
</div>`;
  return item;
}

function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
          <div>Brand</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">nyx</div>
          </div>
        </div><div class="details-row">
          <div>Price</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">10.49</div>
          </div>
        </div><div class="details-row">
          <div>Rating</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">5</div>
          </div>
        </div><div class="details-row">
          <div>Category</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250"></div>
          </div>
        </div><div class="details-row">
          <div>Product_type</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">bronzer</div>
          </div>
        </div></section>`;
}
