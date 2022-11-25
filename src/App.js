import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./Components/Contacts/Contacts";
import About from "./Components/About/About";


function App() {
    return (<BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>);
}

export default App;
