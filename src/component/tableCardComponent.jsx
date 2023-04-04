import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TableCardComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://26.80.64.176:3000/getAllProduct")
      .then((res) => setData(res.data));
  });
  return (
    <>
      <table
        style={{
          width: "50%",
          border: "1px solid #000",
          textAlign: "center",
          margin: "0px auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid #000" }}>Tên sản phẩm</th>
            <th style={{ border: "1px solid #000" }}>Lượng tồn kho</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.id}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.nameProduct}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.quantityProduct}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableCardComponent;
