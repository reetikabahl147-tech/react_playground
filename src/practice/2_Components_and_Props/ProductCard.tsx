// Props are the arguments to your component function. They flow one way, parent to child, and are read-only.
// Children: whatever you put between the tags arrives as props.children.
// Child to parent communication (Angular's @Output): pass a function as a prop.

type ProductCardProps = {
  name: string;
  price: number;
  inStock?: boolean;
  onAddToCart: () => void;
  children: React.ReactNode
};

export default function ProductCard({
  name,
  price,
  inStock = false,
  onAddToCart,
  children
}: ProductCardProps) {
  return (
    <>
      <div
        style={{
          border: "1px solid grey",
          background: "cyan",
          padding: "5px",
          margin: "1px",
          color: "Black",
          width: "400px",
        }}
      >
        <div>Product: {name} </div>
        <div>Price: {price}/- Rs</div>
        <div>{children}</div>
        <div style={{ color: inStock ? "green" : "red" }}>
          {inStock ? "In Stock" : "Out of Stock"}
        </div>
        <button
          onClick={onAddToCart}
          disabled={!inStock}
          style={{
            cursor: inStock ? "pointer" : "not-allowed",
            width: "200px",
            background: "blue",
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
