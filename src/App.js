// import { useState } from 'react';

import Menu from './Components/Menu';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Connect from './Page/Connect';
import Updates from './Page/Updates';
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
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App