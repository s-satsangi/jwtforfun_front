import React { useState } from "react";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
  }

  const handleChange = (e, setHook) => {
    setHook(e.target.value)
}


  return <div>
    <form onSubmit={loginUser}>
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
        value="Login User"
      />
    </form>
  </div>;
};

export default Login;
