import React from 'react'
import { connect } from 'react-redux';
import './cartIcon.scss';
import { ReactComponent as ShopIcon } from '../../assets/shoppingIcon.svg'
import {toggleCart} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCart}) => (
    <div className="cart-icon" onClick={toggleCart}>
      <ShopIcon className="shopping-icon"/>
      <img src="../assets/original.svg" alt=""/>
      <span className="item-count"> 0 </span>
    </div>
  )

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps) (CartIcon);
