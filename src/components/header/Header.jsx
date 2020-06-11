import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
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
            : 
            (
            <Link className="link option" to='/signin' > SIGN IN</Link>
          )
        }
      </div>
    </nav>
  )
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
//////////
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { auth } from '../../firebase/firebase.utils';
// import './header.scss';

// const Header = ({ currentUser }) => (
//   <div className='header'>
//      <Link className="logo-container" to="/">
//        <h1>THE ONLINE SHOP</h1>
//       </Link>
//     <div className='options'>
//       <Link className='option' to='/shop'>
//         SHOP
//       </Link>
//       <Link className='option' to='/shop'>
//         CONTACT
//       </Link>
//       {currentUser ? (
//         <div className='option' onClick={() => auth.signOut()}>
//           SIGN OUT
//         </div>
//       ) : (
//         <Link className='option' to='/signin'>
//           SIGN IN
//         </Link>
//       )}
//     </div>
//   </div>
// );

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

// export default connect(mapStateToProps)(Header);
