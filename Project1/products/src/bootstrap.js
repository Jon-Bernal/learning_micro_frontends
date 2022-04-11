import faker from "faker";



const mount = (el) => {

  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;

}

// Context 1
// We are running this in development in isolation (local dev)

if(process.env.NODE_ENV == 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element with id 'dev-products
  // we are probably running in isolation
  mount(el)
}

// context 2
// Running this in dev with container or production


export { mount };