const data = require('../controllers/catalogue/data');

const getListOfProducts = (cart: any) => {
  let products: any = [],
    id = null;

  if (!cart) throw new Error();

  for (let i = 0; i < data.products.length; i++) {
    id = data.products[i].id.toString();

    if (cart.hasOwnProperty(id)) {
      data.products[i].qty = cart[id];
      products.push(data.products[i]);
    }
  }
  return products;
};

export default { getListOfProducts };
