/* eslint-disable no-undef */
import React, { useState } from 'react';
import Routes from './routes/index';
import HeaderMenu from './Pages/DashAdmin/index';
import { isAuthenticated } from './services/auth';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      {' '}
      {isAuthenticated() ? (
        <>
          {' '}
          <HeaderMenu />{' '}
          <Sidebar
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
          />
        </>
      ) : (
        <></>
      )}
      <Routes></Routes>
    </>
  );
}

export default App;
