import React from "react";
import { QRCodeSVG } from "qrcode.react";


const QRCodeGenerator = ({ token }) => {
  return (
    <div className="qr-container">
      <h3>Your QR Code</h3>
      <QRCodeSVG value={token} size={200} level="H" />
      <p>Scan this code for your loan details.</p>
    </div>
  );
};

export default QRCodeGenerator;
