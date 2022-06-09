import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './pages/Login';
import  NotFoundPage  from './pages/NotFoundPage';
//import  Navbar from './components/Navegation';

import './App.css';


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;