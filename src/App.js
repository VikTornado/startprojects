import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contacts/Contacts";
import About from "./Components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Components/Slider/Slider";
import Cards from "./Components/Cards/Cards";
import Mui from "./Components/Mui/Mui";
import CountDown from "./Components/CountDown/CountDown";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/cards" element={<Cards/>}/>
                    <Route path="/slider" element={<Slider img={props.state}/>}/>
                    <Route path="/about" element={<About car={props.state}/>}/>
                    <Route path="/mui" element={<Mui/>}/>
                    <Route path="/countdown" element={<CountDown/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
