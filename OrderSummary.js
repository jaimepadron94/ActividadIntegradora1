import React from "react";

const OrderSummary = ({ order }) => {
  return (
    <div>
      <h2>Resumen del Pedido</h2>
      <p>Platillo: {order.menuItem}</p>
      <p>Personalización: {order.customization}</p>
      <p>Cantidad: {order.quantity}</p>
    </div>
  );
};

export default OrderSummary;
