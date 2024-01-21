import React from 'react'
import './SignUp.css'
import Sidebar from './Sidebar'

const SignUp = () => {
  return (
    <div className="App">
        <div className="AppGlass" style={{gridTemplateColumns:'12rem auto'}}>
            <Sidebar/>
    <div className='SignupPage'>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div class="s-container" id="s-container">
    <div class="form-s-container sign-up">
      <form>
        <h1>Create Account</h1>
        <div class="social-icons">
          <a href="#" class="icons"><i class="fa-brands fa-google-plus-g"></i></a>
          <a href="#" class="icons"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="icons"><i class="fa-brands fa-instagram-square"></i></a>
          <a href="#" class="icons"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
        <span>or use your email to registration</span>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Sign Up</button>
      </form>
    </div>
    <div class="form-s-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div class="social-icons">
          <a href="#" style={{backgroundColor:'red'}} class="icons"><i class="fa-brands fa-google-plus-g"></i></a>
          <a href="#" style={{backgroundColor:'#1877f2'}} class="icons"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" style={{backgroundColor:'#d70158'}} class="icons"><i class="fa-brands fa-instagram"></i></a>          
          <a href="#" style={{backgroundColor:'yellow'}} class="icons"><i class="fa-brands fa-snapchat"></i></a>
          <a href="#" style={{backgroundColor:'red'}} class="icons"><i class="fa-brands fa-youtube"></i></a>
          <a href="#" style={{backgroundColor:'#1877f2'}} class="icons"><i class="fa-brands fa-twitter"></i></a>
        </div>
        <span>or use your email/password</span>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <a href="#">Forget your Password?</a>
        <button>Sign In</button>
      </form>
    </div>
    <div class="toggle-s-container">
      <div class="toggle">
        <div class="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your Personal details to use all of site features</p>
          <button class="hidden" id="login">Sign In</button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>Register with your Social Media Account </p><p style={{marginTop:'-10px'}}> to use all of site features</p>
          <button class="hidden" id="register">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp