import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cartDropDown/CartDropDown';

const Header = ({currentUser, hidden}) => {
  return (
    <nav className="header sticky">
      <Link className="logo-container" to="/">
        <h1>THE ONLINE SHOP</h1>
      </Link>
      <div className="options menu-link">
        <Link className="link option" to="/shop">Shop</Link>
        <Link className="link option" to="/contact">Contact</Link>
        {currentUser ? (
          <div className="link option" 
            onClick={() => auth.signOut()} >SIGN OUT </div>
            )
            : 
            (
            <Link className="link option" to='/signin' > SIGN IN</Link>
          )
        }
        <CartIcon/>
        { hidden ? null : <CartDropDown/> }
      </div>
    </nav>
  )
}


const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);