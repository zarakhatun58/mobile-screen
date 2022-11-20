import React, { useState } from 'react';
import './Login.css';
import love from './../../Assets/Images/love.png';
// import newIcon from './../../Assets/Images/newIcon.jpg';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        console.log('login with ' + username + ':' + password);
    }
    return (
        <div>
            <div className="App-header">

                <img src={love} alt="heart" className="heart" />
                <div className="appName"> APP NAME</div>
                <input className="user" placeholder="username" value={username} onChange={e => setUsername(e.value)} style={{color:'white'}}/>

                <input className="password" placeholder="password" value={password} onChange={e => setPassword(e.value)} />
                <p className="forgot"> Forgot Password?</p>
                <button type="button" onClick={handleLogin} className="login">Login</button>

            </div>
        </div>
    );
};

export default Login;