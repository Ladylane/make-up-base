let products = [];
const productQuery = document.querySelector('#catalog');
const brandQuery = document.querySelector('#filter-brand');
const typeQuery = document.querySelector('#filter-type');

products = getProducts()

// window.addEventListener('load', () => {
//   getEvents();
//   getProducts()
// })

// function getEvents() {
//   // productQuery.addEventListener('click', (event) => {
//   //   event.preventDefault();
//   // });
//   // input.addEventListener('keyup', getInput);
//   // input.focus();

//   productQuery.addEventListener('click', function () {
//     loadDetails
//   }, false);
// }


async function getProducts() {
  let url = "http://localhost:3000/products"
  const data = await fetch(url)
  const response = await data.json()
  products = response.map(product => {
    const { name, brand, price, type, image, id } = product;
    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      type: product.product_type,
      image: product.image_link
    };
  });
  renderAll();
}

function renderAll() {
  productQuery.innerHTML = renderProducts(products)
  brandQuery.innerHTML = renderBrands(getBrands(products))
  typeQuery.innerHTML = renderTypes(getTypes(products))

  document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', function () {
      let productId = this.getAttribute("value")
      console.log("Product ", productId)

      // document.getElementById("detalhe").innerHTML = 22

      // loadDetails(productId)

      // this.innertext("TESTE")
      // console.log("S", this.innertext)

      // console.log("222", this.appendChild("detalhe"))

    }, false)
  })

  // products.forEach(p => console.log("product", p))

  // document.querySelectorAll('.product').forEach(p => {
  //   // console.log("teste", p);
  // })
}

function getBrands(products) {
  let brands = []

  brands = products.map(product => product.brand)
    .filter((value, index, self) => self.indexOf(value) == index)
  return brands
}

function getTypes(products) {
  let types = products.map(product => product.type)
    .filter((value, index, self) => self.indexOf(value) == index)
  return types
}

function renderBrands(brands) {
  let brandOptions = brands.map(brand => {
    return `<option value=${brand}>${brand}</option>`
  })

  brandOptions.unshift("<option value=0>Todos</option>")
  return brandOptions
}

function renderTypes(types) {
  let typesOptions = types.map(type => {
    return `<option value=${type}>${type}</option>`
  })
  typesOptions.unshift("<option value='0'>Todos</option>")
  return typesOptions
}

function renderProducts(products) {
  let studentHtml = `<h5>Products found (${products.length})</h5>`

  products.forEach(product => {
    const { id, name, brand, price, type, image } = product;
    studentHtml +=
      `<div class="product" data-name="${name}" data-brand="nyx" data-type="bronzer" tabindex="508" value=${id}>
      <figure class="product-figure">
      <img src="$ {image}">
      <input type="hidden" id="${id}" name="custId" value="${product}">
      </figure>
       <section class="product-description">
          <h1 class="product-name">${name}</h1>
          <div class="product-brands"><span class="product-brand background-brand">${brand}</span>
            <span class="product-brand background-price">R$ ${price * 5.50} </span>
          </div>
        </section>
        <div class="detalhe">teste</div>
    </div>
    
    `;
  });
  return studentHtml;
}


// function productItem(product) {
//   const item = `<div class="product" data-name="${product.name}" data-brand="nyx" data-type="bronzer" tabindex="508">
//       <figure class="product-figure">
//         <img src="${product.image_link}">
//       </figure>
//        <section class="product-description">
//           <h1 class="product-name">${product.name}</h1>
//           <div class="product-brands"><span class="product-brand background-brand">${product.brand}</span>
//             <span class="product-brand background-price">R$ ${product.price * 5.50} </span>
//           </div>
//         </section>
//         <section class="product-details"></section>
// </div>`;
//   return item;
// }

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
            <div class="details-bar-bg" style="width= 250"> -------- ${product}</div>
          </div>
        </div><div class="details-row">
          <div>Product_type</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">bronzer</div>
          </div>
        </div></section>`;
  return details
}