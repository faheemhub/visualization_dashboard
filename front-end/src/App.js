import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route element = {<ProtectedRoutes />}>
            <Route path = '/' element = {<h1>Home</h1>}/>
            <Route path = '/about' element = {<h1>About</h1>}/>
            <Route path = '/services' element = {<h1>Services</h1>}/>
            <Route path = '/contact' element = {<h1>Contact</h1>}/>
          </Route>
          <Route path = '/signup' element = {<Signup/>}/>
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
