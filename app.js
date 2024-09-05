import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderSummary from "./components/OrderSummary";
import PaymentOptions from "./components/PaymentOptions";

function App() {
  const [order, setOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOrderSubmit = (orderDetails) => {
    setOrder(orderDetails);
  };

  const handlePayment = (method) => {
    setPaymentMethod(method);
    alert(`Pedido completado con ${method}`);
  };

  return (
    <div>
      <h1>La Ramona - Pedido en Línea</h1>
      {!order && <OrderForm onOrderSubmit={handleOrderSubmit} />}
      {order && <OrderSummary order={order} />}
      {order && !paymentMethod && <PaymentOptions onPayment={handlePayment} />}
    </div>
  );
}

export default App;
