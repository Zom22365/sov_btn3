import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewAllOrder = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://26.80.64.176:3001/getAllOrder")
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <table
        style={{
          width: "70%",
          border: "1px solid #000",
          textAlign: "center",
          margin: "0px auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid #000" }}>Số hiệu đơn</th>
            <th style={{ border: "1px solid #000" }}>Mã công ty</th>
            <th style={{ border: "1px solid #000" }}>Tình trạng</th>
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
                  {item.orderNumber}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.companyId}
                </td>
                <td style={{ border: "1px solid #000", padding: "10px" }}>
                  {item.orderStatus}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewAllOrder;
