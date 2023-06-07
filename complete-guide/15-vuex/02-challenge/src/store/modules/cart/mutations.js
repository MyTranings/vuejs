export default {
  addProductToCart(context, payload) {
    const productInCartIndex = context.cart.items.findIndex(
      (ci) => ci.productId === payload.id
    );

    if (productInCartIndex >= 0) {
      context.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: payload.id,
        title: payload.title,
        image: payload.image,
        price: payload.price,
        qty: 1,
      };
      context.cart.items.push(newItem);
    }
    context.cart.qty++;
    context.cart.total += payload.price;
  },
  removeProductFromCart(context, payload) {
    const productInCartIndex = context.cart.items.findIndex(
      (cartItem) => cartItem.productId === payload.prodId
    );
    const prodData = context.cart.items[productInCartIndex];
    context.cart.items.splice(productInCartIndex, 1);
    context.cart.qty -= prodData.qty;
    context.cart.total -= prodData.price * prodData.qty;
  },
}