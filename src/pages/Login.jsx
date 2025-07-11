import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Input from "../components/shared/common/Input";
import { Button } from "../components/shared/imports";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    // if (!email.trim() || !password.trim()) {
    //   toast.error("All fields are required!");
    //   return;
    // }

    const result = login(email, password);

    if (result.success) {
      toast.success("Login successful!");
      setTimeout(() => navigate("/productdetails"), 1500);
    } else if (result.message === "No accounts found") {
      toast.error("No account found. Redirecting to Register...");
      setTimeout(() => navigate("/register"), 2000);
    } else {
      toast.error(result.message || "Invalid email or password");
    }
  };

  return (
    <>
      <div className="flex items-center text-gray-500 py-6 space-x-1">
        <Link className="text-[15px] hover:text-yellow-400" to="/">Home</Link>
        <ChevronRight size={18} color="gray" />
        <Link className="text-[15px] hover:text-yellow-300" to="/accounts">Accounts</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Login Form */}
        <div className="side1 md:pr-20 md:border-r">
          <form onSubmit={handleSignIn} className="form space-y-3">
            <div>
              <h1 className="border-b-2 border-yellow-400 text-xl md:text-2xl text-gray-700 font-semibold w-24 pb-3">Login</h1>
              <hr className="text-gray-300" />
              <p className="text-gray-600 text-sm pt-3">Welcome back! Sign in to your account</p>
            </div>

            <div className="flex flex-col space-y-2 mt-2">
              <label className="font-bold text-gray-600 text-[15px]">Email Address*</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-3">
              <label className="font-bold text-gray-600 text-[15px]">Password*</label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center">
              <Link to="/" className="text-gray-600 hover:text-yellow-400 transition duration-300">Return to Store</Link>
              <Link to="/forgot" className="text-gray-600 hover:text-yellow-400 transition duration-300">Forgotten Password?</Link>
            </div>

            <Button
              type="submit"
              name="Login"
              className="bg-yellow-300 text-gray-700 font-semibold rounded-full w-full sm:w-fit px-10 py-3 mt-1 mb-6"
            />
          </form>
        </div>

        {/* Create Account Section */}
        <div className="side2 border-t border-gray-400 md:border-none md:pl-20">
          <div>
            <h1 className="border-b-2 border-yellow-400 text-2xl text-gray-700 font-semibold w-58 pb-3 py-5">Create New Account</h1>
            <hr className="text-gray-300" />
            <p className="text-gray-500 text-sm pt-2">Create your own Account</p>
          </div>

          <div className="md:pt-5">
            <h1 className="text-gray-700 text-xl">Sign up today and you'll be able to:</h1>
            <ul className="pt-3 text-gray-600">
              <li>✔ Speed your way through the checkout</li>
              <li>✔ Track your orders easily</li>
              <li>✔ Keep a record of all your purchases</li>
            </ul>
            <Link to="/register">
              <Button
                name="Register"
                className="bg-yellow-300 text-gray-700 font-semibold rounded-full w-full sm:w-fit px-10 py-3 mt-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
