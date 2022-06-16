import React, { useEffect, useState } from 'react';
import ClockComponent from '../components/clock_component';
import Header from '../components/header_component';
import NavigationComponent from '../components/navigation_component';
import '../style/App.css';


function App() {

  return (
    <div className="w-full h-screen bg-neutral-900">
      <Header title={'Relógio'} />
      <div className='relative top-2/4 items-center'>
        <ClockComponent />
      </div>
      <div className='w-full absolute bottom-0 items-center'>
        <NavigationComponent />
      </div>
    </div>
  );
}

export default App;
