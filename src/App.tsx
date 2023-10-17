import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Login} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Login/>  
   
    <Footer /> 
  </div>
);

export default App;
