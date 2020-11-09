import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import { Route, Switch } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
