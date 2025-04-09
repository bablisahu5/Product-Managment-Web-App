
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Hero from './Components/Hero/Hero';
import Item from './Components/Item/Item';
import ProductList from './Pages/ProductList';
import ProductForm from './Pages/ProductForm';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero /><Item /></>} />
        <Route path='/mens' element={<ShopCategory category="men" />} />
        <Route path='/women' element={<ShopCategory category="women" />} />
        <Route path='/kids' element={<ShopCategory category="kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/add-product' element={<ProductForm />} />
        <Route path='/edit-product/:productId' element={<ProductForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
