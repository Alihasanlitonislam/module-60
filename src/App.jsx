import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from './companent/Header/Header';
const App = () => {
  return (
    <div className='w-11/12 mx-auto text-center'>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;