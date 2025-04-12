import { productData } from "../lib/index";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const products = productData;
  return (
    <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
