import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { RentPage } from "./pages/rent-page";
import { SellPage } from "./pages/sell-page";
import {ContactPage} from './pages/contact-page';
import {HomePage} from './pages/home-page';
import {Header} from './component/header';
import './App.css';


function App() {
  return (
      <Router>
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={ <HomePage />} />
                <Route path='/rent' element={ <RentPage/>} />
                <Route path='/sell' element={ <SellPage/>} />
                <Route path='/contacts' element={ <ContactPage />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
