import React, { Component } from 'react'
import './signIn.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    }
    catch(error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({[name]: value})
  } 


  render() {
    return (
      <div className="sign-in">
        <h2> Alreay have an account?</h2>
        <p> Sign in with your Email & Password</p>
        <form onSubmit={this.handleSubmit} action="">
          <FormInput 
            type="text" 
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="email"      
          />
           <FormInput 
            type="password" 
            name="password" 
            value={this.state.password}
            handleChange={this.handleChange} 
            label="password"
          />
          <div className="custom-btn-wrapper buttons">
            <CustomButton type="submit"> Sign in  </CustomButton>
            <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>
               {''} Sign in with Google {''}
            </CustomButton>
          </div>

        </form>
        
      </div>
    )
  }
}

export default SignIn
