import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CocktailItemInputForm from './CocktailItemInputForm';
import { addToFavourites } from '../../../../store/actions/cocktails';


// Mocking useDispatch
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

// Mocked version of addToFavourites
jest.mock('../../../../store/actions/cocktails', () => ({
  addToFavourites: jest.fn().mockImplementation((cocktail) => async (dispatch) => {
    try {
      dispatch({ type: 'ADD_FAVOURITES', payload: [cocktail] });
    } catch (error) {
      console.log("action error add favourites : ", error.message);
    }
  }),
}));

describe('CocktailItemInputForm', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  it('renders a form with an input and a submit button', () => {
    render(
      <CocktailItemInputForm  id="15" cocktail={{}} />
    );
    const input = screen.getByLabelText('Amount');
    const button = screen.getByRole('button', { name: 'Add' });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('dispatches addToFavourites action on form submission', () => {
    render(<CocktailItemInputForm id="15" cocktail={{}} />);
    const amountInput = screen.getByLabelText('Amount');
    const addButton = screen.getByRole('button', { name: 'Add' });

    fireEvent.change(amountInput, { target: { value: '3' } });
    fireEvent.click(addButton);

    expect(addToFavourites).toHaveBeenCalledWith(expect.any(Object));
    
  });

  it('passes the correct props to the Input component', () => {
    render(<CocktailItemInputForm id="15" cocktail={{}} />);
    const input = screen.getByLabelText('Amount');

    expect(input).toHaveAttribute('id', expect.stringMatching(/^amount_/));
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '5');
    expect(input).toHaveAttribute('step', '1');

  });

  it('updates the amount value when typing into the input field', () => {
    render(<CocktailItemInputForm id="15" cocktail={{}} />);
    const input = screen.getByLabelText('Amount');
    
    fireEvent.change(input, { target: { value: '5' } });

    expect(input.value).toBe('5');
  });
});
