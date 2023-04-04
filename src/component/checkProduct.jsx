import axios from "axios";
import React from "react";
import { useState } from "react";

const CheckProductComponent = () => {
  const [forms, setForms] = useState({
    nameProduct: "",
    quantityProduct: 0,
  });
  const handleCreate = () => {
    const url = `http://26.80.64.176:3001/getProduct/${forms.nameProduct}/${forms.quantityProduct}`;
    axios.get(url).then((res) => {
      //   console.log(res);
      alert(res.data);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "quantityProduct") {
      setForms({
        ...forms,
        [name]: Number(value),
      });
    } else {
      setForms({
        ...forms,
        [name]: value,
      });
    }
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          border: "1px solid #000",
          margin: "0px auto",
          padding: "24px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Thông tin sản phẩm</h2>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "7px" }}
          >
            Tên sản phẩm:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="nameProduct"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "7px" }}
          >
            Số lượng sản phẩm:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="number"
            name="quantityProduct"
            onChange={handleChange}
          />
        </div>

        <div
          style={{
            borderTop: "1px solid #000",
            paddingTop: "16px",
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#303F9F",
              color: "#fff",
              fontSize: "18px",
            }}
            onClick={handleCreate}
          >
            Kiểm tra
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckProductComponent;
