import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import "./styles/base.scss";
import "./styles/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
