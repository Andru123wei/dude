import { useState } from 'react';
import dudeN from '../images/dudeN.png';
import icD from '../images/icon.png';
import '../styles/login.css';
import sonidoencima from'../assets/sounds/triston.mp3'
import { motion } from 'framer-motion'
import ReactHowler from 'react-howler'

function Login() {

    const [value, setValue] = useState({
        email: '',
        username: '',
        password: '',
    });

    const [dudu,setDudu] = useState(false);

    const handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        });
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`enviando datos... ${value.username}, ${value.password}`)
    }

  return (
    <>
    <div className='ultra-div'>

        <div className="signupFrm">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Sign up</h1>

                <div className="inputContainer">
                    <input type='text' className="input" placeholder="a" onChange={handleInputChange} name='username'/>
                    <label className="label">Username</label>
                </div>

                <div className="inputContainer">
                    <input type='password' className="input" placeholder="a" onChange={handleInputChange} name='password'/>
                    <label className="label">Password</label>
                 </div>

                <input type='submit' className="submitBtn" value="Sign In"/>
            </form>

            <div className='formR'>
                No account?, <a href='#'>Sign Up here</a>
            </div>
        </div>

        <div className="mega-div">
       
            <button onClick={()=>setDudu(true)}><motion.img 
                animate={{ rotate: 40 }}
                transition={{ 
                    duration: 0.4,
                    repeat : 10,
                    repeatType: "reverse" 
                }}
                
                className='icon'  src={icD} />
                 <ReactHowler
                    src={sonidoencima}
                    playing={dudu}
                    volume={0.3}
                    onEnd={()=>setDudu(false)}
                 />
               
            </button>
            <img className='dude' alt='dude' src={dudeN} />
        </div>
    </div>
    </>
  );
}


  

export default Login;