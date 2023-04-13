// import { useState } from 'react';

import Menu from './Components/Navigation';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Connect from './Page/Connect';
import Events from './Page/Events';
import Contact from './Page/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App