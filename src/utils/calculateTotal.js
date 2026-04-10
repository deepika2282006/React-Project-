export const calculateTotal = (cart) => {
  return cart.reduce((sum, item) => sum + item.price, 0);
};