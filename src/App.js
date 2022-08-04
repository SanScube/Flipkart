import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './Pages/Cart';
import { Home } from './Pages/Home';
import { Navbar } from './components/Navbar';
import { Provider } from "react-redux"
import store from './store/store';
import { Login } from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter >
      </Provider> 

    </div>
  );
}

export default App;
