import { IProduct } from "../interfaces";
import { priceSeparator, sliceText } from "../utils";
import Button from "./ui/Button";
import Image from "./ui/Image";

interface Iprops {
  product: IProduct;
  openDestroyModal: () => void;
  openEditModal: () => void;
  setProductToEdit: (product: IProduct) => void;
  setProductToEditIdx: (idx: number) => void;
  idx: number;
  setUpdatedSelectedColors: (colors: string[]) => void;
}

const ProductCard = ({
  product,
  openDestroyModal,
  openEditModal,
  setProductToEdit,
  setProductToEditIdx,
  setUpdatedSelectedColors,
  idx,
}: Iprops) => {
  const { title, price, description, category, colors, imageURL } = product;

  const onEdit = () => {
    setProductToEdit(product);
    setUpdatedSelectedColors(product.colors);
    setProductToEditIdx(idx);
    openEditModal();
  };

  const onDestroy = () => {
    setProductToEdit(product);
    openDestroyModal();
  };

  const renderColorCircles = colors.map((color: string, key: number) => {
    return (
      <span
        key={key}
        className="w-4 h-4 border rounded-full cursor-pointer border-slate-300"
        style={{ backgroundColor: `${color}` }}
      />
    );
  });

  return (
    <div className="max-w-sm mx-auto border border-gray-200 rounded-md shadow-xl md:max-w-lg md:mx-0">
      <img
        className="w-full rounded-md h-52 lg:object-cover"
        src={imageURL}
        alt=""
      />
      <div className="p-3 card__content">
        <p className="font-bold text-red-900 uppercase">{title}</p>
        <p className="text-slate-600 font-regular h-[48px]">
          {sliceText(description, 72)}
        </p>
        <div className="flex flex-wrap items-center mt-2 space-x-1">
          {!colors.length ? (
            <p className="min-h-[20px] font-medium text-red-400 text-sm">
              No Colors Available
            </p>
          ) : (
            renderColorCircles
          )}
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium">{priceSeparator(price)} L.E</div>
          <div className="flex items-center text-xs font-medium">
            <span className="mr-1">{category.name}</span>
            <Image
              className="w-10 h-10 rounded-full "
              imageURL={category.imageURL}
              alt={category.name}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-1 p-2">
        <Button
          className="w-full bg-gray-700 hover:bg-gray-600"
          onClick={onEdit}
        >
          EDIT
        </Button>
        <Button
          className="w-full bg-red-900 hover:bg-red-700"
          onClick={onDestroy}
        >
          REMOVE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
