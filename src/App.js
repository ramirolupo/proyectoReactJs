import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detalle from './Pages/Detalle';
import NotFound from './Pages/NotFoud';
import ProductList from './Pages/ProductList';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products/:category' element={<ProductList />} />
          <Route exact path='/product/:id' element={<Detalle />} />
          <Route exact path='/notFound' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
