import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Login.css';

const Login = () => (

    <div className="app__login" id='login'>
       <h1 className="headtext__cormorant">Login</h1>
      <form>
        <div >
          <input
            type="text"
            id="username"
            name="username"
            defaultValue="username"
            className="app__login-text_input"

          />
        </div>
        <div >
          <input
            type="password"
            id="password"
            name="password"
            className="app__login-text_input"

          />
        </div>
   
          <p>
        <input
          type="submit"
          value="LOGIN"
          className='app__login-btn' />   <a className="app__login-link" href="/signup">Sign Up</a> </p>
  
      </form>
      <div className='app__login-link_area'>
   
      </div>
    </div>
  
);

export default Login;