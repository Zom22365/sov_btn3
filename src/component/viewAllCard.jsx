import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewAllCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://26.80.64.176:3003/getAllCard")
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <table
        style={{
          width: "80%",
          border: "1px solid #000",
          textAlign: "center",
          margin: "0px auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid #000" }}>Tên chủ thẻ</th>
            <th style={{ border: "1px solid #000" }}>Kiểu thẻ</th>
            <th style={{ border: "1px solid #000" }}>Số thẻ</th>
            <th style={{ border: "1px solid #000" }}>Số CVC</th>
            <th style={{ border: "1px solid #000" }}>Tháng năm hết hạn</th>
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
                  {item.username}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.cardtype}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.cardNumber}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.cvcNumber}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.date}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewAllCard;
