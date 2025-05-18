const toggleWishlist = (productId) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (wishlist.includes(productId)) {
    const updatedWishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  } else {
    wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
};
export const isInWishlist = (productId) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  return wishlist.includes(productId);
};
export default toggleWishlist;