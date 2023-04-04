import React, { useState } from "react";
import Header from "../component/Header";
import CreateOrder from "../component/createOrder";
import ViewAllOrder from "../component/tableOrder";
import CheckOrder from "../component/checkOrder";

const Order = () => {
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
      <h1 style={{ textAlign: "center" }}>Kiểm tra trạng thái đơn hàng</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "40px auto 60px",
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
          Tạo mới
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
          Xem toàn bộ đơn hàng
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
          Kiểm tra trạng thái đơn hàng
        </button>
      </div>
      {create && <CreateOrder />}
      {view && <ViewAllOrder />}
      {check && <CheckOrder />}
      {/* {create && <FomrCardComponent />}
     
      {check && <CheckProductComponent />} */}
    </>
  );
};

export default Order;
