// actions.js
export const addToCart = (product) => {
    console.log('Thêm sản phẩm vào giỏ hàng:', product);
    return { type: 'ADD_TO_CART', payload: product };
  };
  
  export const removeFromCart = (itemId) => {
    console.log('Xoá sản phẩm từ giỏ hàng:', itemId);
    return { type: 'REMOVE_FROM_CART', payload: itemId };
  };
  