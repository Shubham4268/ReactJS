/*This is a Login form created using react-hook-form.
First a method is created which handles the event when form is submitted. It should be async so that it waits till all the data is fetched from the appwrite server.
Using the appwrite auth service we login. Then if the login is successful, thw userdata of current user is grabbed using appwrite authservice.
If we grabbed the userdata successfully then we dispatch the userdata to store.
The customized Input and Button components are used here.
*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Logo } from "./index";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { setLoadOn,setLoadOff } from "../store/postSlice";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const load = useSelector((state)=>state.post.loading)
  
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg  bg-lime-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline">
                  Sign Up
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/* handleSubmit will automatically take input values from input fields with the need of state management */}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label = "Email: "
              placeholder = "Enter your email"
              type = "email"
              {...register("email",{
                required : true
              })}
            />
            <Input 
            label = "Password: "
            placeholder = "Enter your Password "
            type = "password"
            {...register("password",{
              required : true
            })}
            />
            <Button type = "submit" className="w-full">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
