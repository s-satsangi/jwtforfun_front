import React {useState} from "react";
import axios from "axios";

const Register = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("")
    
    const registerUser = (e) => {
        e.preventDefault()
        axios.get("http://localhost:3000/newuser").then(res=>res.json()).then(res=>console.log(res))
        console.log("Register fetch goes here")
    }

    const handleChange = (e, setHook) => {
        setHook(e.target.value)
    }

  return <div>
      <form onSubmit={registerUser}>
        <input 
            type="text"
            value={login}
            onChange={(e)=>handleChange(e,setLogin)}
        />
        <input 
            type="text"
            value={password}
            onChange={(e)=>handleChange(e,setPassword)}
        />
        <input 
            type="submit"
            value="Register New User"
        />
      </form>
  </div>;
};

export default Register;
