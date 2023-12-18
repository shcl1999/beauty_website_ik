import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Helmet from 'react-helmet';
import ScrollToTop from './Components/ScrollToTop';

import Home from './Pages/Home';
import Pedicure from './Pages/Pedicure';
import Schoonheid from './Pages/Schoonheid';
import Cupping from './Pages/Cupping';
import Voetreflex from './Pages/Voetreflex';
import OverMij from './Pages/Over Mij';
import Tarieven from './Pages/Tarieven';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Salon Irma</title>
      </Helmet>
        <BrowserRouter>	
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Pedicure" element={<Pedicure />} />
          <Route path="/Schoonheid" element={<Schoonheid />}/>
          <Route path="/Cupping" element={<Cupping />}/>
          <Route path="/Voetreflex" element={<Voetreflex />}/>
          <Route path="/OverMij" element={<OverMij />}/>
          <Route path="/Tarieven" element={<Tarieven />}/>
        </Routes>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
