import React from 'react'
import './sign-ing-sign-out.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInSignOut = () => (
  <div className="SignInSignOut">
    <SignIn/>
    <SignUp/>
  </div>
)

export default SignInSignOut;
