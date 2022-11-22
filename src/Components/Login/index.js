import React, { useState } from 'react';
import './Login.css';
import love from './../../Assets/Images/love.png';
// import newIcon from './../../Assets/Images/newIcon.jpg';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { Alert, FormControl } from '@mui/material';
import { Label } from '@mui/icons-material';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [showUser, setShowUser] = useState(false);

    const handleSubmit = (e) => {
        setShowUser(false);
        e.preventDefault();
         if (validateEmail(email)) {
            setShowUser(true);
            setError('');
            return;
        }
        setError("Email is not valid");
        return false;
    }

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setShowUser(false);
    }



    const handleLogin = () => {
        console.log('login with ' + username + ':' + password);
    }
    return (
        <div>
            <div className="App-header">
                {
                    showUser && (
                        <Alert data-testid="user"> {email}</Alert>
                    )
                }

                {
                    error && (
                        <Alert data-testid="error"> {error}</Alert>
                    )
                }

                <img src={love} alt="heart" className="heart" />
                <div className="appName"> APP NAME</div>
                <div>header renders with react testing tutorial</div>
                <form onSubmit={handleSubmit} noValidate>
                   
                  
                   
                    <input className="user" aria-label="email" type="email" placeholder="enter email" value={email} onChange={e => setEmail(e.target.value)} style={{ color: 'white' }} />

                    <input className="password" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <p className="forgot"> Forgot Password?</p>
                    <button type="submit" data-testid="submit" className="login">Login</button>
                    <button data-testid="reset" type="reset" onClick={resetForm} className="login">Reset</button>
                </form>


            </div>
        </div>
    );
};

export const validateEmail=(email)=>{
    const regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regex.test(email)){
        return true;
    }
    return false;
}

export default Login;