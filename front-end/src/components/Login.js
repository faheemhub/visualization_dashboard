import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(()=>{
    //     let result = localStorage.getItem('user');
    //     if(user){

    //     }
    // });
    const collectData = async() => {
        const result = await fetch('http://127.0.0.1:8080/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{"Content-Type":"application/json"}
        });
        const data = await result.json();
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
    }

    return(
        <div className="login">
        <h1>Login</h1>
        Email :<br/>
        <input type="email" className="inputBox" onChange={(e)=>setEmail(e.target.value)}
        value={email} placeholder="Enter Email"/><br/>
        Password :<br/>
        <input type="password" className="inputBox" onChange={(e)=>setPassword(e.target.value)}
        value={password} placeholder="Enter Password"/><br/>
        <button className="loginBtn" onClick={collectData}>Login</button>
        </div>
    )
}

export default Login;