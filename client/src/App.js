// import logo from './logo.svg';
// import './App.css';
import './index.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//component
import Nav from './components/Nav';
import Footer from './components/Footer';
//pages
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutMe} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
