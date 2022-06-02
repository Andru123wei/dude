import dudeN from './images/dudeN.png';
import icD from './images/icon.png';
import './App.css';

function App() {
  return (
    <>
  <div className='ultra-div'>
    
      <div className='formu'>
        <label>Username</label>
        <form>
          <input type="text" placeholder='Username' />
        </form>
        <label>Password</label>
        <form>
          <input type="password" placeholder='Password' />
        </form>
      </div>  

    <div className="mega-div">

    <div>
      <button><img className='icon'  src={icD}/></button>
    </div>

    <div>
      <img className='dude' src={dudeN}/>
    </div>

    </div>
    
    </div>
    </>
  );
}

export default App;
