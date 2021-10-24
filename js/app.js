console.log("LOADING")

loadPage()

function loadPage(brand) {
  let url = "http://makeup-api.herokuapp.com/api/v1/products.json"

  let productPromise = fetch(url);

  productPromise.then((resp) => {
    resp.json().then((products) => {
      document.getElementById("catalog").innerHTML = loadProducts(products)
      document.getElementById("filter-brand").innerHTML = loadBrands(products)
      document.getElementById("filter-type").innerHTML = loadProductType(products)

      filterBrand = document.getElementById("filter-brand")
      filterBrand.addEventListener("change", function () {
        changeBrand(this.value)
      }, false);
    });

    filterProductType = document.getElementById("filter-type")
    filterProductType.addEventListener("change", function () {
      changeProductType(this.value)
    }, false);
  });
}

function loadProducts(products) {
  let rows = products.map((product) => {
    return productItem(product);
  });
  return rows.join("");
}

function loadBrands(products) {
  let rows = products.map(product => product.brand)
    .filter((value, index, self) => self.indexOf(value) == index)

  let options = rows.map(brand => {
    return `<option value=${brand}>${brand}</option>`
  })
  return options;
}

function loadProductType(products) {
  let rows = products.map(product => product.product_type)
    .filter((value, index, self) => self.indexOf(value) == index)

  let options = rows.map(product_type => {
    return `<option>${product_type}</option>`
  })
  return options;
}

function changeBrand(brand) {
  console.log("Filter brand:", brand);

  url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brand

  let productsPromisse = fetch(url);

  productsPromisse.then((resp) => {
    resp.json().then((products) => {
      document.getElementById("catalog").innerHTML = loadProducts(products)
    });
  });
}

function changeProductType(productType) {
  console.log("Filter ProductType:", productType);

  url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + productType

  console.log("URL", url)

  let productsPromisse = fetch(url);

  productsPromisse.then((resp) => {
    resp.json().then((products) => {
      document.getElementById("catalog").innerHTML = loadProducts(products);
    });
  });
}

function productItem(product) {
  const item = `
    <div 
        class="product" data-name="${product.name}" data-brand="nyx" data-type="bronzer" tabindex="508">
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

  // item += loadDetails(product)

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
            <div class="details-bar-bg" style="width= 250">${product.category}</div>
          </div>
        </div><div class="details-row">
          <div>Product_type</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">bronzer</div>
          </div>
        </div></section>`;
  return details
}

// function load(products) {
//   let rows = products.map((product) => {
//     // console.log("Linha", product.id);
//     // console.log("Name", product.name);
//     return `<tr><td>${product.id}</td><td style="width:300px">${product.name}</td><td><img width="80" height="120" src="${product.image_link}" /></td></tr>`;
//   });
//   // console.log("Rows", rows);

//   return `<table border="0">${rows.join(" ")}</table>`;
// }
