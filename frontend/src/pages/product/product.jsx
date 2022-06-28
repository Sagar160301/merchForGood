import { ProductTop } from "../../components/product-top/product-top";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductMiddle } from "../../components/product-middle/product-middle";

export const Product = () => {
  useEffect(() => {
    getSingleData();
  }, []);
  const [data, setData] = useState({});
  const { id } = useParams();

  const getSingleData = async () => {
    try {
      let res = await fetch(`http://localhost:5902/products/${id}`);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>{data.name} T-SHIRT</h2>
      <div className="yellow-border"></div>
      <ProductTop data={data} />
      <ProductMiddle data={data} />
    </>
  );
};
