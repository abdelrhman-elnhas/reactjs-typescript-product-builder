export function productValidation(product: {
  title: string;
  description: string;
  price: string;
  imageURL: string;
}) {
  const { title, description, imageURL, price } = product;

  const error: {
    title: string;
    description: string;
    price: string;
    imageURL: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validURL = /^(ftp|https|http):\/\/[^"]+$/.test(imageURL);

  if (!title.trim() || title.length < 8 || title.length > 30) {
    error.title =
      "Please Enter a Valid Product Title between 8 and 30 Characters";
  }

  if (
    !description.trim() ||
    description.length < 10 ||
    description.length > 200
  ) {
    error.description =
      "Please Enter a Valid Product Description Between 10 and 200 Characters";
  }

  if (!imageURL.trim() || !validURL) {
    error.imageURL =
      "Please Enter a Valid Image URL ex: https://www.example.com/";
  }

  if (!price.trim() || price == "0" || isNaN(Number(price))) {
    error.price = "Please Enter a Valid Price";
  }

  return error;
}
