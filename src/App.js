import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import { Route, useLocation, Switch } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route exact path='/work'>
            <OurWork />
          </Route>
          <Route exact path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route exact path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
