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


  return <div></div>;
};

export default Login;
