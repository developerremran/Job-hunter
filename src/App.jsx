import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
  <>
   <Header></Header>
   <div className='min-h-calc(100vh - 80px)'> 
   <Outlet></Outlet>
   </div>
   <div className='w-full bg-black'>
    <Footer></Footer>
   </div>
   
  </>
  );
};

export default App;