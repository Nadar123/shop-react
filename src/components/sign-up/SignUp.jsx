import React from 'react'
import './signUp.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert('Password dont match');
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(
        email, 
        password
      );

     await createUserProfileDocument(user, {displayName});
     this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
     })

    } catch(error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> i do not have an account </h2>
        <span>Sign up with your email and password </span>
        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="displayName" 
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
      
          <FormInput 
            type="text" 
            name="email" 
            value={email} 
            onChange={this.handleChange}
            label="email"
            required
          />

          <FormInput 
            type="password" 
            name="password" 
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

            <CustomButton type="submit"> SIGN UP  </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
