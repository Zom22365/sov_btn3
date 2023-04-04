import axios from "axios";
import React, { useState } from "react";

const CreateCard = () => {
  const [forms, setForms] = useState({
    username: "",
    cardtype: "",
    cardNumber: "",
    cvcNumber: "",
    date: "",
  });
  const handleCreate = () => {
    const url = "http://26.80.64.176:3003/createCard";
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
        <h2 style={{ textAlign: "center" }}>Thông tin thẻ</h2>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "18px",
              marginBottom: "7px",
            }}
          >
            Tên chủ thẻ:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "18px",
              marginBottom: "7px",
            }}
          >
            Kiểu thẻ:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="cardtype"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "18px",
              marginBottom: "7px",
            }}
          >
            Số thẻ:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="cardNumber"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "18px",
              marginBottom: "7px",
            }}
          >
            Số CVC:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="cvcNumber"
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "18px",
              marginBottom: "7px",
            }}
          >
            Tháng năm hết hạn:
          </label>
          <input
            style={{ width: "90%", padding: "10px 16px" }}
            type="text"
            name="date"
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

export default CreateCard;
