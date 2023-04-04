import React from "react";
import Header from "../component/Header";
import { useState } from "react";
import FomrCardComponent from "../component/formCardComponent";
import TableCardComponent from "../component/tableCardComponent";
import CheckProductComponent from "../component/checkProduct";
const Product = () => {
  const [create, setCreate] = useState(true);
  const [view, setView] = useState(false);
  const [check, setCheck] = useState(false);

  const handleCreate = () => {
    setCreate(true);
    setView(false);
    setCheck(false);
  };

  const handleViewAll = () => {
    setCreate(false);
    setView(true);
    setCheck(false);
  };

  const handleCheck = () => {
    setCreate(false);
    setView(false);
    setCheck(true);
  };

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>Kiểm tra hàng tồn kho</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px auto 60px",
          gap: "40px",
        }}
      >
        <button
          style={{
            padding: "16px 20px",
            background: "#303F9F",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "10px",
          }}
          className={`${create ? "active" : ""}`}
          onClick={handleCreate}
        >
          Tạo mới{" "}
        </button>
        <button
          style={{
            padding: "16px 20px",
            background: "#303F9F",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "10px",
          }}
          onClick={handleViewAll}
          className={`${view ? "active" : ""}`}
        >
          Xem toàn bộ sản phẩm
        </button>
        <button
          style={{
            padding: "16px 20px",
            background: "#303F9F",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "10px",
          }}
          className={`${check ? "active" : ""}`}
          onClick={handleCheck}
        >
          Kiểm tra hàng tồn
        </button>
      </div>
      {create && <FomrCardComponent />}
      {view && <TableCardComponent />}
      {check && <CheckProductComponent />}
    </>
  );
};

export default Product;
