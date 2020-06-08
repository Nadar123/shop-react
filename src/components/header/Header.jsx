import React from 'react'
import {Link} from 'react-router-dom';
import './header.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
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
        : (
            <Link className="link option" to='/signin' > SIGN IN</Link>
          )
        }
      </div>
    </nav>
  )
}

export default Header;
