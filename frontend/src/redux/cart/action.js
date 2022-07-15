export const CARTPRODUCT = "CARTPRODUCT";

export const addCartData = (data) => {
  return {
    type: CARTPRODUCT,
    payload: data,
  };
};
