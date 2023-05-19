import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import Input from '../../../UI/Input'
import { addToFavourites } from '../../../../store/actions/cocktails';
import classes from './CocktailItemInputForm.module.css'

const CocktailItemInputForm = (props) => {
  const dispatch = useDispatch();
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let favouriteItem = {
      amount: amountInputRef.current.value,
      ...props.cocktail
    }
    dispatch(addToFavourites(favouriteItem));
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
            label="Amount"
            ref={amountInputRef}
            input={{
                id: `amount_${props.id}`,
                type: "number",
                defaultValue: "1",
                min: "1",
                max: "5",
                step: "1"
            }}
            />
        <button type="submit" >Add</button>
    </form>
  )
}

export default CocktailItemInputForm