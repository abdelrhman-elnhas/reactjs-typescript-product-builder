import { ChangeEvent, FormEvent, Fragment, useCallback, useState } from "react";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputList, productData } from "./lib";
import Input from "./components/ui/Input";
import { IProduct, ProductNameTypes } from "./interfaces";
import Select from "./components/ui/Select";
import { v4 as uuid } from "uuid";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ui/ErrorMsg";
import ProductCard from "./components/ProductCard";

function App() {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /* ___ States ___ */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [products, setProducts] = useState<IProduct[]>(productData);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [updatedSelectedColors, setUpdatedSelectedColors] = useState<string[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [colorError, setColorError] = useState("");
  const [isOpenDestroyModal, setIsOpenDestroyModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  console.log("selectedColors", selectedColors);
  console.log("updatedColors", updatedSelectedColors);
  console.log("product to edit", productToEdit.colors);

  /* ___ Handlers ___ */
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openEditModal = useCallback(() => {
    setIsOpenEditModal(true);
  }, []);

  const closeEditModal = useCallback(() => {
    setIsOpenEditModal(false);
  }, []);

  const openDestroyModal = useCallback(() => {
    setIsOpenDestroyModal(true);
  }, []);

  const closeDestroyModal = useCallback(() => {
    setIsOpenDestroyModal(false);
  }, []);

  const handleColorChange = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((prev) => prev.filter((c) => c !== color));
      return;
    }
    if (productToEdit.colors.includes(color)) {
      setSelectedColors((prev) => prev.filter((c) => c !== color));
      return;
    }
    setSelectedColors((prev) => [...prev, color]);
    setColorError("");
  };

  const handleColorEditChange = (color: string) => {
    if (updatedSelectedColors.includes(color)) {
      setUpdatedSelectedColors((prev) => prev.filter((c) => c !== color));
      return;
    }
    setUpdatedSelectedColors((prev) => [...prev, color]);
    setColorError("");
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setProduct((prev) => ({ ...prev, [name]: value }));
      setErrors({ ...errors, [name]: "" });
    },
    [errors]
  );

  const handleEditChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setProductToEdit({ ...productToEdit, [name]: value });
      setErrors({ ...errors, [name]: "" });
    },
    [errors, productToEdit]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;
    const error = productValidation({ title, description, imageURL, price });

    const hasErrorMsg = Object.values(error).some((err) => err !== "");

    if (selectedColors.length == 0) {
      setColorError("Please Choose The Product Colors");
      return;
    }

    if (hasErrorMsg) {
      setErrors(error);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: selectedColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setSelectedColors([]);
    closeModal();
  };

  const handleEditSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

    const error = productValidation({ title, description, imageURL, price });

    const hasErrorMsg = Object.values(error).some((err) => err !== "");

    if (updatedSelectedColors.length == 0) {
      setColorError("Please Choose The Product Colors");
      return;
    }

    if (hasErrorMsg) {
      setErrors(error);
      return;
    }

    const updatedProducts = [...products];

    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: updatedSelectedColors,
    };

    setProducts(updatedProducts);
    setProduct(defaultProduct);
    setSelectedColors([]);
    closeEditModal();
  };

  const handleDestroy = () => {
    const updatedProducts = [...products];
    setProducts(
      updatedProducts.filter((product) => product.id != productToEdit.id)
    );
    closeDestroyModal();
  };

  /* ___ Renders ___ */

  const renderProducts = (
    <div className="grid grid-cols-1 gap-2 p-2 m-5 rounded-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
          openDestroyModal={openDestroyModal}
          openEditModal={openEditModal}
          setProductToEdit={setProductToEdit}
          setProductToEditIdx={setProductToEditIdx}
          idx={idx}
          setUpdatedSelectedColors={setUpdatedSelectedColors}
        />
      ))}
    </div>
  );

  const renderFormInputs = formInputList.map((input) => {
    return (
      <Fragment key={input.id}>
        <Input
          label={input.label}
          type={input.type}
          id={input.id}
          name={input.name}
          onChange={handleChange}
          required
        />
        <ErrorMsg msg={errors[input.name]} />
      </Fragment>
    );
  });

  const renderColors = colors.map((color, index) => (
    <span
      key={index}
      className="w-5 h-5 border rounded-full cursor-pointer border-slate-300"
      style={{ backgroundColor: `${color}` }}
      onClick={() => handleColorChange(color)}
    />
  ));

  const renderEditColors = colors.map((color, index) => (
    <span
      key={index}
      className="w-5 h-5 border rounded-full cursor-pointer border-slate-300"
      style={{ backgroundColor: `${color}` }}
      onClick={() => handleColorEditChange(color)}
    />
  ));

  const renderSelectedColors = selectedColors.map((color, index) => (
    <span
      key={index}
      className="p-1 text-sm border rounded-md cursor-pointer border-slate-200 text-slate-300"
      style={{ backgroundColor: `${color}` }}
    >
      {color}
    </span>
  ));

  const renderProductToEditFormInputs = (
    id: string,
    label: string,
    name: ProductNameTypes
  ) => {
    return (
      <Fragment key={id}>
        <Input
          label={label}
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={handleEditChange}
          required
        />
        <ErrorMsg msg={errors[name]} />
      </Fragment>
    );
  };

  return (
    <main className="container">
      <div className="flex items-center justify-between px-5 py-3">
        <h1 className="text-2xl font-semibold text-red-900 sm:text-3xl ">
          Products Builder
        </h1>
        <Button
          className="p-2 transition duration-300 bg-red-900 rounded-md hover:bg-red-700"
          onClick={() => openModal()}
        >
          ADD PRODUCT
        </Button>
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form onSubmit={handleSubmit} className="space-y-2">
          {renderFormInputs}
          <Select
            data={categories}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          ></Select>
          <div className="flex flex-wrap gap-2">{renderColors}</div>
          <div className="flex flex-wrap gap-2">
            {colorError == "" ? renderSelectedColors : <p>{colorError}</p>}
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-red-900 hover:bg-red-700">
              Add Product
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="Edit Product"
      >
        <form onSubmit={handleEditSubmit} className="space-y-2">
          {renderProductToEditFormInputs("title", "Product Title", "title")}
          {renderProductToEditFormInputs(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductToEditFormInputs(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderProductToEditFormInputs("price", "Product Price", "price")}
          <Select
            data={categories}
            selected={productToEdit.category}
            setSelected={(value) => {
              setProductToEdit({
                ...productToEdit,
                category: value,
              });
            }}
          ></Select>
          <div className="flex flex-wrap gap-2">{renderEditColors}</div>
          <div className="flex flex-wrap gap-2">
            {colorError == "" ? (
              updatedSelectedColors.map((color, index) => {
                return (
                  <span
                    key={index}
                    className="p-1 text-sm border rounded-md cursor-pointer border-slate-200 text-slate-300"
                    style={{ backgroundColor: `${color}` }}
                  >
                    {color}
                  </span>
                );
              })
            ) : (
              <p>{colorError}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-red-900 hover:bg-red-700">
              Edit Product
            </Button>
          </div>
        </form>
      </Modal>

      {/* Destroy Product Modal */}
      <Modal
        isOpen={isOpenDestroyModal}
        closeModal={closeDestroyModal}
        title="Delete Product"
      >
        <p className="my-3 font-medium text-red-900 ">
          Do You Really Want to Delete The{" "}
          <span className="font-bold">{productToEdit.title}</span> Product ?
        </p>
        <div className="flex justify-center space-x-2">
          <Button
            className="bg-red-900 hover:bg-red-700 w-[50%]"
            onClick={handleDestroy}
          >
            Delete Product
          </Button>
          <Button
            className="bg-gray-500 hover:bg-red-700 w-[50%]"
            onClick={closeDestroyModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      {renderProducts}
    </main>
  );
}

export default App;
