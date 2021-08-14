// import logo from './logo.svg';
// import './App.css';
import './index.css'
import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//component
import Nav from './components/Nav';
import Footer from './components/Footer';
//pages
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Resume from './pages/Resume';

function App() {

  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/portfolio" component={AboutMe} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
