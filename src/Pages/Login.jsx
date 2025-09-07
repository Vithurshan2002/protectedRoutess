import React from "react";
import { useDispatch } from "react-redux";
import { setuser } from "../slices/userslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
        const dispatch=useDispatch();
        const navigate=useNavigate();
    const login=()=>{
        dispatch(setuser({email:"ultra@gamil.com",password:"0000"}))
        navigate("/");
    }
  return (
    <>
      <div>Login</div>
      <button onClick={login}className="px-2 py-1 bg-green-700 cursor-pointer transition-all hover:bg-green-400 rounded-full font-bold mt-5">Login</button>
    </>
  );
};

export default Login;
