import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import Footer from './components/Footer/Footer';

import "./styles/base.scss";
import "./styles/reset.scss";
import './App.scss';

function App() {

  return (
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
  )
}

export default App
