import React , {useState} from 'react'
import './Login.css';

export default function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [valid,setValid]=useState(false);
    const validation = ((e)=>{
        e.preventDefault();
        if(username==="admin" && password==="admin"){
            setValid(true);
        }
        else{
            setValid(false);
        }
        console.log(valid)
    })
    const userchange=((e)=>{
        setUsername(e.target.value);
    })
    const passchange=((e)=>{
        setPassword(e.target.value);
    })
  return (
      <>
          <div className="login">
              <h1>Admin Login</h1>
              <form onSubmit={validation}>
                  <p><input type="text" name="login" value={username} onChange={userchange} placeholder="Username or Email" /></p>
                  <p><input type="password" name="password" value={password} onChange={passchange} placeholder="Password" /></p>
                  <p className="remember_me">
                      <label>
                          <input type="checkbox" name="remember_me" id="remember_me" />
                          Remember me on this computer
                      </label>
                  </p>
                  <p className="submit"><input type="submit" value="Login"/></p>
              </form>
          </div>
          <div className="login-help">
              <p>Forgot your password? <a href="/">Click here to reset it</a>.</p>
          </div>
</>
  )
}

function returnValid(){
    return(Login.valid);
}
