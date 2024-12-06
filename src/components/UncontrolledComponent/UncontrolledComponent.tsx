import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Producto añadido: ${inputRef.current?.value} ⭐`);
    }
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Nombre del producto. Ej Manzana"
      />

      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
