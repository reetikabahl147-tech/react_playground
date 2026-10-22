import ProductCard from "./ProductCard.tsx";
import { useState } from "react";

const productList = [
  {
    id: 1,
    name: "Indo Western",
    price: 1099,
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Kurta Set",
    price: 903,
    inStock: true,
    rating: 3.9
  },
  {
    id: 3,
    name: "Saree",
    price: 1400,
    rating: 5
  },
];

export default function ProductsList() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div
        style={{
          background: "lightgrey",
          height: "100vh",
          color: "black",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Products List</h3>
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
              onAddToCart={() => setCount((prev) => prev + 1)}
            >

             <span>Rating : {product.rating}</span>   

            </ProductCard>
          );
        })}

        <div
          style={{
            padding: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>Total Items in Cart : {count}</div>
          <button
            onClick={() => setCount(0)}
            style={{ width: 200, background: "red", cursor: "pointer" }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
