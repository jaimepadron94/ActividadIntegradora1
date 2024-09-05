import React, { useState } from "react";

const OrderForm = ({ onOrderSubmit }) => {
  const [menuItem, setMenuItem] = useState("");
  const [customization, setCustomization] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrderSubmit({ menuItem, customization, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Realiza tu Pedido</h2>
      <label>
        Selecciona un platillo:
        <input
          type="text"
          value={menuItem}
          onChange={(e) => setMenuItem(e.target.value)}
          required
        />
      </label>
      <label>
        Personaliza tu pedido:
        <input
          type="text"
          value={customization}
          onChange={(e) => setCustomization(e.target.value)}
        />
      </label>
      <label>
        Cantidad:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </label>
      <button type="submit">Agregar al Carrito</button>
    </form>
  );
};

export default OrderForm;
