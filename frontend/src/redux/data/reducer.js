import { ADDDATA } from "./action";

const init = {
  data: [],
};

export const dataReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADDDATA:
      return {
        ...store,
        data: payload,
      };
    default:
      return store;
  }
};
