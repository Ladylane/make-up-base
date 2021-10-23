console.log("BEGIN");

let productsPromisse = fetch(
  "http://makeup-api.herokuapp.com/api/v1/products.json"
);

productsPromisse.then((resp) => {
  resp.json().then((product) => {
    let products = loadProducts(product);
    document.getElementById("catalog").innerHTML = products;
  });
});

function loadProducts(products) {
  let rows = products.map((product) => {
    return productItem(product);
  });
  return rows.join("");
}

//EXEMPLO DO CÓDIGO PARA UM PRODUTO
function productItem(product) {
  const item = `<div class="product" data-name="${product.name}" data-brand="nyx" data-type="bronzer" tabindex="508">
  <figure class="product-figure">
    <img src="${product.image_link}">
  </figure>
  <section class="product-description">
    <h1 class="product-name">${product.name}</h1>
    <div class="product-brands"><span class="product-brand background-brand">Nyx</span>
<span class="product-brand background-price">R$ 57.70</span></div>
  </section>
  // CARREGAR OS DETALHES
</div>`;
  return item;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
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

// function load(products) {
//   let rows = products.map((product) => {
//     // console.log("Linha", product.id);
//     // console.log("Name", product.name);
//     return `<tr><td>${product.id}</td><td style="width:300px">${product.name}</td><td><img width="80" height="120" src="${product.image_link}" /></td></tr>`;
//   });
//   // console.log("Rows", rows);

//   return `<table border="0">${rows.join(" ")}</table>`;
// }
