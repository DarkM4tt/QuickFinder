import { faker } from "@faker-js/faker";

export type TrendDataType = {
  imgUrl: string;
  description: String;
};

const getTrendsData = () => {
  const trendsData: TrendDataType[] = [];

  for (let i = 0; i < 5; i++) {
    const imgUrl: string = faker.image.people(300, 400);
    const description: string = faker.commerce.productName();
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

export const TrendsData = getTrendsData();
export const SuggestionData = getSuggestionData();
