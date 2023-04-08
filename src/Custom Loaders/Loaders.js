import { getStoredData } from "../components/Utilities/Utility";



export const getSelectedProducts = async () => {
  const res = await fetch("products.json");
  const allItems = await res.json();
  const cartItems = getStoredData();

  let cartProducts = [];
  for (let id in cartItems) {
    const foundProduct = allItems.find((item) => item.id === id);
    if (foundProduct) {
      foundProduct.quantity = cartItems[id];
      cartProducts.push(foundProduct);
    }
  }
  return {cartProducts,allItems};
};


