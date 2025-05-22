export const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    return cart;
};
export const addToCart = (product, qty) => {
    let cart = getCart();
    const index = cart.findIndex((item) => item.product.productId === product.productId);
    if (index === -1) {
        cart.push({
            product,
            qty,
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        return 'Product added to cart';
    }
    const newQty = cart[index].qty + qty;
    if (newQty <= 0) {
        return removeFromCart(cart[index].product.productId);
    } else {
        cart[index].qty = newQty;
        localStorage.setItem('cart', JSON.stringify(cart));
        return 'Product added to cart';
    }
};
export const removeFromCart = (productId) => {
    const cart = getCart();
    const newCart = cart.filter((item) => item.product.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return 'Product removed from cart';
};
