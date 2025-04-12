import { IProduct } from "../interfaces";
import { priceSeparator } from "../utils";
import Button from "./ui/Button";
import Image from "./ui/Image";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
  const { title, price, description, category, colors, imageURL } = product;

  const renderColorCircles = colors.map((color: string, key: number) => {
    return (
      <span
        key={key}
        className=" w-4 h-4 rounded-full cursor-pointer border-1 border-slate-500"
        style={{ backgroundColor: `${color}` }}
      />
    );
  });

  console.log(colors);

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 rounded-md border border-gray-200 shadow-xl">
      <img
        className="rounded-md w-full h-52 lg:object-cover"
        src={imageURL}
        alt=""
      />
      <div className="card__content p-3">
        <p className="uppercase text-red-900 font-bold">{title}</p>
        <p className="text-slate-600 font-regular h-[48px]">{description}</p>
        <div className="flex items-center mt-2 flex-wrap space-x-1">
          {!colors.length ? (
            <p className="min-h-[20px] font-medium text-red-400 text-sm">
              No Colors Available
            </p>
          ) : (
            renderColorCircles
          )}
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium">{priceSeparator(price)} L.E</div>
          <div className="flex items-center font-medium text-xs">
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
        <Button className="bg-gray-700 hover:bg-gray-600 w-full">EDIT</Button>
        <Button className="bg-red-900  hover:bg-red-700 w-full">REMOVE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
