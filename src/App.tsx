import Button from "./components/ui/Button";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  return (
    <main className="container">
      <div className="flex items-center justify-between py-3 px-5">
        <h1 className="text-2xl sm:text-3xl text-red-900 font-semibold ">
          Products Builder
        </h1>
        <Button
          className="bg-red-900 hover:bg-red-700 p-2 rounded-md transition duration-300"
          onClick={() => console.log("Open Modal")}
        >
          ADD PRODUCT
        </Button>
      </div>

      <ProductsGrid />
    </main>
  );
}

export default App;
