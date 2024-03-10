import { useState } from "react"

const Signup=()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const collectData = async() => {
    
        const result = await fetch('http://127.0.0.1:8080/add-user',{
            method:'post',
            body:JSON.stringify({email,password,confirmPassword}),
            headers:{"Content-Type":"application/json"}
        });
        const data = await result.json();
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    return(
        <div className="register">
        <h1>Register</h1>
        Email :<br/>
        <input type="email" className="inputBox" onChange={(e)=>setEmail(e.target.value)}
        value={email} placeholder="Enter Email"/><br/>
        Password :<br/>
        <input type="password" className="inputBox" onChange={(e)=>setPassword(e.target.value)}
        value={password} placeholder="Enter Password"/><br/>
        Confirm Password :<br/>
        <input type="password" className="inputBox" onChange={(e)=>setConfirmPassword(e.target.value)}
        value={confirmPassword} placeholder="Re-Enter Password"/><br/>
        <button className="registerBtn" onClick={collectData}>Signup</button>
        </div>
    )
}

export default Signup;