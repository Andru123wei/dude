import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './pages/Login';
import  NotFoundPage  from './pages/NotFoundPage';
import Home from './pages/Home';
//import  Navbar from './components/Navegation';

import './App.css';


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;