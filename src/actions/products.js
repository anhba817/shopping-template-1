import * as productConstants from '../constants/products';

export const addProductItem = (product) => {
  return {
    type: productConstants.ADD_PRODUCT_ITEM,
    payload: {
      product,
    },
  };
};

export const removeProductItem = (id) => {
  return {
    type: productConstants.REMOVE_PRODUCT_ITEM,
    payload: {
      id,
    },
  };
};
