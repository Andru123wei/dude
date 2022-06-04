import { useState } from 'react';
import dudeN from '../images/dudeN.png';
import icD from '../images/icon.png';
import '../styles/login.css';

function Login() {

    const [value, setValue] = useState({
        email: '',
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
        console.log(`enviando datos... ${value.email}, ${value.username}, ${value.password}`)
    }

  return (
    <>
    <div className='ultra-div'>

        <div className="signupFrm">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Sign up</h1>

                <div className="inputContainer">
                    <input type='email' className='input' placeholder="a" onChange={handleInputChange} name='email'/>
                    <label className="label">Email</label>
                </div>

                <div className="inputContainer">
                    <input type='text' className="input" placeholder="a" onChange={handleInputChange} name='username'/>
                    <label className="label">Username</label>
                </div>

                <div className="inputContainer">
                    <input type='password' className="input" placeholder="a" onChange={handleInputChange} name='password'/>
                    <label className="label">Password</label>
                 </div>

                <div className="inputContainer">
                    <input type="password" className="input" placeholder="a"/>
                    <label className="label">Confirm Password</label>
                </div>

                <input type='submit' className="submitBtn" value="Sign up"/>
            </form>
        </div>

        <div className="mega-div">
            <button><img className='icon' src={icD} /></button>
            <img className='dude' src={dudeN} />
        </div>
    </div>
    </>
  );
}


  

export default Login;