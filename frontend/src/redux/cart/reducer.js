import { CARTPRODUCT } from "./action";

const init = {
  cartProduct: [],
};

export const cartProductReducer = (store = init, { type, payload }) => {
  switch (type) {
    case CARTPRODUCT:
      return {
        ...store,
        cartProduct: payload,
      };
    default:
      return store;
  }
};
