import React, { useState } from "react";
import QRCodeGenerator from "../components/QRCodeGenerator";


const SlipGenerator = () => {
  const [token, setToken] = useState("YourUniqueToken12345");

  return (
    <div className="slip-container">
      <h2>Loan Slip</h2>
      <p>Token Number: {token}</p>
      <QRCodeGenerator token={token} />
      <button onClick={() => alert("Slip downloaded!")}>Download Slip</button>
    </div>
  );
};

export default SlipGenerator;
