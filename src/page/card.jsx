import React, { useState } from "react";
import Header from "../component/Header";
import CreateCard from "../component/createCard";
import ViewAllCard from "../component/viewAllCard";
const Card = () => {
  const [create, setCreate] = useState(true);
  const [view, setView] = useState(false);

  const handleCreate = () => {
    setCreate(true);
    setView(false);
  };

  const handleViewAll = () => {
    setCreate(false);
    setView(true);
  };

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>Dịch vụ tính phí qua thẻ</h1>
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
          Xem toàn bộ thông tin thẻ
        </button>
      </div>
      {create && <CreateCard />}
      {view && <ViewAllCard />}
    </>
  );
};

export default Card;
