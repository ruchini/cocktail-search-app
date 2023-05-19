import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SearchBar from './Search';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
});

test('renders SearchBar component', () => {
  render(<SearchBar />);

  // Assert that the search input and clear button are rendered
  const searchInput = screen.getByPlaceholderText('Search for a Cocktail');
  const clearButton = screen.getByRole('button', {
    name: /search/i
  })
  // Assert initial state
  expect(searchInput).toHaveValue('');
  expect(clearButton).toBeInTheDocument();

  // Simulate user input
  fireEvent.change(searchInput, { target: { value: 'Mojito' } });

  // Assert input value and dispatch
  expect(searchInput).toHaveValue('Mojito');

  // Simulate clear button click
  fireEvent.click(clearButton);

  // Assert cleared state and dispatch
  expect(searchInput).toHaveValue('');
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});
