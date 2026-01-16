import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import { Header } from "./Header";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Services from "./pages/Services/Services";
import Registration from "./pages/Registration/Registration"
import Order from "./pages/Order/Order";


function App() {
  return <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/registration" element={<Registration/>}></Route>
      <Route path="/create-order" element={<Order />}></Route>
    </Routes>
    
    <Footer/>
  </div>
}

export default App;
