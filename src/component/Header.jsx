import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            gap: "40px",
            fontSize: "20px",
            marginBottom: "40px",
          }}
        >
          <li>
            <a href="/card">Dịch vụ tính phí qua thẻ</a>
          </li>
          <li>
            <a href="/order">Kiểm tra trạng thái đơn hàng</a>
          </li>
          <li>
            <a href="/product">Kiểm tra hàng tồn kho</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
