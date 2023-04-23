
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import Signup from './signup/signup';
import Home from './home/home';
import MarketPlace from './marketplace/marketplace';
import Products from './products/products';
import Login from './login/login';

function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/marketplace' element={<MarketPlace/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;
