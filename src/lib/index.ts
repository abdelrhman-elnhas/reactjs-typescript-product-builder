import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productData: IProduct[] = [
  {
    id: uuid(),
    title: "Classic White T-Shirt",
    description: "A versatile white t-shirt made from 100% organic cotton.",
    imageURL:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9waG90b19vZl93aGl0ZV9tYWxlX3RzaGlydF9tb2NrdXBfd2hpdGVfdHNoaV85YjNmOWZjZS03MTZkLTQxYmUtODkzZS05MzkwZWY1NmZiZmFfMi5qcGc.jpg",
    price: "540",
    colors: ["#ffffff"],
    category: {
      name: "Clothes",
      imageURL:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Leather Handbag",
    description: "Elegant handbag made from high-quality leather.",
    imageURL:
      "https://i.etsystatic.com/16178494/r/il/3db57b/2644615902/il_570xN.2644615902_cs4u.jpg",
    price: "1990",
    colors: ["#219b21", "#000000"],
    category: {
      name: "Bags",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuiFjgMYMWGBO1QIfFKqT3IjfMrRMpSyFuA&s",
    },
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Lightweight running shoes with breathable mesh.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljKd_vKiWg8X-GM5c_QZuMaaJPkyPYN62fXx2Hsbr6Ei1wwyz7TsejQqiZ3cwT_1hPZM&usqp=CAU",
    price: "1050",
    colors: ["#ffffff", "#219b21", "#999466"],
    category: {
      name: "Clothes",
      imageURL:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Sticky Notes Pack",
    description: "Colorful sticky notes perfect for reminders and bookmarks.",
    imageURL:
      "https://static2.jetpens.com/images/a/000/203/203647.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=bba3e44b51c4470da01ca8669ca1e441",
    price: "50",
    colors: ["#246790", "#cfc45d", "#af5252"],
    category: {
      name: "Stationery",
      imageURL:
        "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Digital Watch",
    description: "Water-resistant digital watch with LED backlight.",
    imageURL:
      "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg",
    price: "10520",
    colors: ["#000000", "#cfc45d"],
    category: {
      name: "Accessories",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaR-xAQWgOjdcxpAtWSSW3dvVl163wAaCQA&s",
    },
  },
  {
    id: uuid(),
    title: "Denim Jacket",
    description: "Classic blue denim jacket with button-down design.",
    imageURL:
      "https://thursdayboots.com/cdn/shop/products/1024x1024-Mens-Jackets-Denim-Trucker-WashedIndigo-010423-1.jpg?v=1673282143",
    price: "2500",
    colors: ["#000000", "#999466"],
    category: {
      name: "Clothes",
      imageURL:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Laptop Backpack",
    description: "Spacious backpack with padded laptop compartment.",
    imageURL:
      "https://bypavo.com/cdn/shop/files/88444850_2354570928169463_1626541687369105408_n_e021016b-26f4-4dd2-9aea-ad5ba6b0df02.jpg?v=1734225092&width=1445",
    price: "1650",
    colors: ["#219b21", "#999466"],
    category: {
      name: "Bags",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzW3FltGnpcKzVOdqG1Zx-tdAyi7kO8UBtOg&s",
    },
  },
  {
    id: uuid(),
    title: "Basic T-Shirt",
    description: "Soft cotton t-shirt available in multiple colors.",
    imageURL:
      "https://inyourshoe.com/cdn/shop/products/egyptian-blue-basic-oversized-tee-basic-oversized-tees-in-your-shoe-726275.gif?v=1681823894",
    price: "450",
    colors: ["#ffffff", "#000000", "#ab5797"],
    category: {
      name: "Clothes",
      imageURL:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Gel Ink Pens",
    description: "Smooth writing gel pens in assorted colors.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4_oFDBrlM_G18YR9kME2pkbkNEs0REHIsA&s",
    price: "100",
    colors: ["#000000", "#cfc45d"],
    category: {
      name: "Stationery",
      imageURL:
        "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Sunglasses",
    description: "UV-protection sunglasses with stylish frames.",
    imageURL: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    price: "4970",
    colors: ["#af5252", "#219b21", "#999466"],
    category: {
      name: "Accessories",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaR-xAQWgOjdcxpAtWSSW3dvVl163wAaCQA&s",
    },
  },
  {
    id: uuid(),
    title: "Tote Bag",
    description: "Eco-friendly tote bag for daily errands.",
    imageURL:
      "https://images.teemill.com/aqrflniltkvie67ibvxscraecquhw4jt2bcx2mi3xhdax2u4.jpeg.jpg?w=1080&h=1080&v=2",
    price: "380",
    colors: ["#ac5478", "#356787", "#ab5797"],
    category: {
      name: "Bags",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuiFjgMYMWGBO1QIfFKqT3IjfMrRMpSyFuA&s",
    },
  },
  {
    id: uuid(),
    title: "Black Hoodie",
    description: "Comfortable pullover hoodie with a large front pocket.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQuQrJZAnVw1vMnca45f3A2Ey2lvT1HzLeg&s",
    price: "960",
    colors: ["#000000"],
    category: {
      name: "Clothes",
      imageURL:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
  },
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
  {
    id: uuid(),
    name: "Bags",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuiFjgMYMWGBO1QIfFKqT3IjfMrRMpSyFuA&s",
  },
  {
    id: uuid(),
    name: "Accessories",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaR-xAQWgOjdcxpAtWSSW3dvVl163wAaCQA&s",
  },
  {
    id: uuid(),
    name: "Stationery",
    imageURL:
      "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg",
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#ff0076",
  "#ac5478",
  "#356787",
  "#ab5797",
  "#000000",
  "#ffffff",
  "#652097",
  "#246790",
  "#cfc45d",
  "#af5252",
  "#219b21",
  "#999466",
];
