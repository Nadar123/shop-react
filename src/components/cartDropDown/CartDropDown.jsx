import React from 'react';
import './cartDropDown.scss' ;
import CustomButton from '../custom-button/CustomButton';


const CartDropDown = () =>  (
    <div className="cart-dropdown">
      <div className="cart-item"/>
        <CustomButton> GO CHECK OUT</CustomButton>
    </div>
)

export default CartDropDown;
