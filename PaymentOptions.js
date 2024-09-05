import React, { useState } from "react";

const PaymentOptions = ({ onPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    onPayment(paymentMethod);
  };

  return (
    <div>
      <h2>Opciones de Pago</h2>
      <label>
        <input
          type="radio"
          value="Tarjeta de Crédito"
          checked={paymentMethod === "Tarjeta de Crédito"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Tarjeta de Crédito
      </label>
      <label>
        <input
          type="radio"
          value="PayPal"
          checked={paymentMethod === "PayPal"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        PayPal
      </label>
      <label>
        <input
          type="radio"
          value="Transferencia Bancaria"
          checked={paymentMethod === "Transferencia Bancaria"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Transferencia Bancaria
      </label>
      <button onClick={handlePayment}>Completar Pedido</button>
    </div>
  );
};

export default PaymentOptions;
