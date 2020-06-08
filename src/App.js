
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      
      console.log(user);
    }) 
    // this.unsubscribeFromAuth(); 
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" component={SignInSignOut}/>
        </Switch>
      </div>
    );
  }
}

export default App;

