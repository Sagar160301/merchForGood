import { AUTH } from "./action";

const init = {
  token: null,
};

export const authReducer = (store = init, { type, payload }) => {
  switch (type) {
    case AUTH:
      return {
        ...store,
        token: payload,
      };
    default:
      return store;
  }
};
