import axios from "axios";
import React from "react";
import { useState } from "react";

const CreateOrder = () => {
  const [forms, setForms] = useState({
    orderNumber: "",
    companyId: "",
    orderStatus: "",
  });
  const handleCreate = () => {
    const url = "http://26.80.64.176:3001/createOrder";
    axios.post(url, forms).then((res) => {
      alert("Thêm mới thành công!");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForms({
      ...forms,
      [name]: value,
    });
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
        <h2 style={{ textAlign: "center" }}>Thông tin đơn hàng</h2>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "7px" }}
          >
            Số hiệu đơn hàng:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="orderNumber"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "7px" }}
          >
            Mã công ty:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="companyId"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "7px" }}
          >
            Tình trạng:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="orderStatus"
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
            Thêm mới
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateOrder;
