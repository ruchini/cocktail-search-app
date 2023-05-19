import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CocktailItem from "./CocktailItem";

const cocktail = {
  id: 11375,
  name: "Foxy Lady",
  category: "Ordinary Drink",
  image: "https://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg",
  instructions: "Mix all ingredients and serve over ice.",
  glass: "Cocktail glass",
  info: "Alcoholic",
  strIngredient1: "Amaretto",
  strIngredient2: "Water",
  strIngredient3: "Suger"
};

// Mocking useDispatch
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe("CocktailItem", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  test("renders cocktail name and category", () => {
    render(<CocktailItem cocktail={cocktail} />);
    const name = screen.getByText(cocktail.name);
    const category = screen.getByText(cocktail.category);
    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  test("renders cocktail image", () => {
    render(<CocktailItem cocktail={cocktail} />);
    const image = screen.getByAltText(cocktail.name);
    expect(image).toHaveAttribute("src", cocktail.image);
  });

});
