import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Header1 from './components/Header1';

function App() {
  return (
    <div>
       <Header1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
