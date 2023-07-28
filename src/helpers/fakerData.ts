import { faker } from "@faker-js/faker";

export type TrendDataType = {
  imgUrl: string;
  description: String;
};

const getTrendsData = () => {
  const trendsData: TrendDataType[] = [];

  for (let i = 0; i < 5; i++) {
    const description: string = faker.commerce.productName();
    const imgUrl: string = `https://source.unsplash.com/random/300x400/?${encodeURIComponent(description)}`;
    trendsData.push({
      imgUrl: imgUrl,
      description: description,
    });
  }

  return trendsData;
};

const getSuggestionData = () => {
  const suggestionData: string[] = [];

  for (let i = 0; i < 5; i++) {
    const suggestion: string = faker.commerce.productName();
    suggestionData.push(suggestion);
  }

  return suggestionData;
};

export type ProductType = {
  imgUrl: string;
  productName: string;
  currencyPrefix: string;
  originalPrice: string;
  discountedPrice: string;
  rating: number;
  noOfReviews: number;
  isFavourite: boolean;
  setDisplayActive: boolean;
};

const MAX_RATING = 5;
const MIN_RATING = 1;

const getProductData = () => {
  const productData: ProductType[] = [];

  for (let i = 0; i < 50; i++) {
    const productName: string = faker.commerce.productName();
    const imgUrl: string = `https://source.unsplash.com/random/300x400/?${encodeURIComponent(productName)}`;
    const originalPrice: string = faker.commerce.price(100, 5000);
    const discountedPrice: string = faker.commerce.price(100, Number(originalPrice));
    const rating = Math.round(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING);
    const noOfReviews = Math.floor(Math.random() * 1000 + 1);
    const isFavourite = false;
    const setDisplayActive = true;

    productData.push({
      imgUrl: imgUrl,
      productName: productName,
      currencyPrefix: "Rs.",
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
      rating: rating,
      noOfReviews: noOfReviews,
      isFavourite: isFavourite,
      setDisplayActive: setDisplayActive,
    });
  }

  return productData;
};

export const TrendsData = getTrendsData();
export const SuggestionData = getSuggestionData();
export const ProductData = getProductData();
