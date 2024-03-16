import React from 'react'
import '../styles/SignupScreen.css'

function SignupScreen() {
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <button type='submit'>Sign In</button>
        
        <h4> 
          <span className='signupScreen_gray'>New to Netflix?</span>
          Sign Up now.
        </h4>

      </form>

    </div>
  )
}

export default SignupScreen