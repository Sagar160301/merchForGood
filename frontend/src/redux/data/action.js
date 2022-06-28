export const ADDDATA = "ADDDATA";

export const addData = (data) => {
  return {
    type: ADDDATA,
    payload: data,
  };
};

export const getData = () => async (dispatch) => {
  try {
    let res = await fetch("http://localhost:5902/products");
    let data = await res.json();
    dispatch(addData(data));
  } catch (error) {
    console.log(error);
  }
};
