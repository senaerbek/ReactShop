import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/AdminActions/AdminAction";
import Paper from "@material-ui/core/Paper";
import { Bar, Line, Pie } from "react-chartjs-2";

export default function ProductChart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.adminTrademarkReducer);
  const label = [];
  const stock = [];
  const [category, setcategory] = useState(1);

  useEffect(() => {
    dispatch(getProducts(category));
  }, [category]);

  !products.product
    ? console.log("xxx")
    : products.product.map((p) => {
        label.push(p.productName);
        stock.push(p.stock);
      });

  console.log(stock);

  const data = {
    labels: label,
    datasets: [
      {
        label: "Ürün Stok Değerleri",
        data: stock,
        backgroundColor: [
          "rgba(131,90,241)",
          "rgba(111,161,248)",
          "rgba(176,126,180)",
        ],
      },
    ],
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setcategory(value);
  }
  return (
    <div>
      <Paper>
        <form>
          <select onChange={handleChange} style={{ margin: "10px" }}>
            <option value="1">Elbise</option>
            <option value="2">Mont</option>
            <option value="3">Pantolon</option>
            <option value="4">Etek</option>
            <option value="5">Gömlek</option>
          </select>
        </form>
        <Bar data={data} />
      </Paper>
    </div>
  );
}
