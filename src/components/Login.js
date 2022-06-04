import { useState } from 'react';
import dudeN from '../images/dudeN.png';
import icD from '../images/icon.png';
import '../styles/login.css';
import { motion } from 'framer-motion'

function Login() {

    const [value, setValue] = useState({
        username: '',
        password: '',
    });

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
                <h1 className="title">Sign In</h1>

                <div className="inputContainer">
                    <input type='text' className="input" placeholder="a" onChange={handleInputChange} name='username'/>
                    <label className="label">Username</label>
                </div>

                <div className="inputContainer">
                    <input type='password' className="input" placeholder="a" onChange={handleInputChange} name='password'/>
                    <label className="label">Password</label>
                 </div>

                <input type='submit' className="submitBtn" value="Sign up"/>
            </form>
        </div>

        <div className="mega-div">
            <button><motion.img 
                animate={{ rotate: 40 }}
                transition={{ 
                    duration: 0.4,
                    repeat : 10,
                    repeatType: "reverse" 
                }}
                
                className='icon'  src={icD} />
            </button>
            <img className='dude' alt='dude' src={dudeN} />
        </div>

    </div>
    </>
  );
}


  

export default Login;