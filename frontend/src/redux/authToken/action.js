export const AUTH = "AUTH";

export const addToken = (data) => {
  return {
    type: AUTH,
    payload: data,
  };
};
