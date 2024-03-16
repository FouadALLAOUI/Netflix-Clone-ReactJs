import React from 'react';
import "../styles/LoginScreen.css";
function LoginScreen() {
  return (
    <div className='loginScreen'>

       <div className='loginScreen_background'>
          <img
             className='loginScreen_logo'
             src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
             alt=''
          />
          <button className='loginScreen_button'>
             Sign In
          </button>
             
          <div className='loginScreen_gradient'/>       
          
          <div className='loginScreen_body'>
            <h1>Login</h1>
          </div>
             
       </div>
       


    </div>
  )
}

export default LoginScreen