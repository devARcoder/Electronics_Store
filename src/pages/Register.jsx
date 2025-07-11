import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Input from '../components/shared/common/Input';
import { Button } from '../components/shared/imports';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Submit handler
  const handleRegister = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      toast.error('All fields are required!');
      return;
    }

    // Save user to localStorage
    const newUser = { email, password, firstName, lastName };
    localStorage.setItem('user', JSON.stringify(newUser));

    toast.success('Account created successfully!');
    setTimeout(() => navigate('/accounts'), 1500); // Go to login page
  };

  return (
    <>
      <div className="flex items-center text-gray-500 py-6 space-x-1 px-4 md:px-24">
        <Link className="text-[15px] hover:text-yellow-400" to="/">Home</Link>
        <ChevronRight size={18} color="gray" />
        <Link className="text-[15px] hover:text-yellow-300" to="/accounts">Accounts</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-24">
        {/* Register Form */}
        <div className="side1 md:pr-20 md:border-r md:border-gray-300">
          <form className="form space-y-3" onSubmit={handleRegister}>
            <div>
              <h1 className="border-b-2 border-yellow-400 text-xl md:text-2xl text-gray-700 font-semibold w-56 pb-3">Create New Account</h1>
              <hr className="text-gray-300" />
              <p className="text-gray-600 text-sm pt-3">Create your own Account</p>
            </div>

            <div className="flex flex-col space-y-2 mt-2">
              <label className="font-bold text-gray-600 text-[15px]">First Name*</label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-2">
              <label className="font-bold text-gray-600 text-[15px]">Last Name*</label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-2">
              <label className="font-bold text-gray-600 text-[15px]">Email*</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-3">
              <label className="font-bold text-gray-600 text-[15px]">Password*</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 px-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              name="Register"
              className="bg-yellow-300 text-gray-700 font-semibold rounded-full w-full sm:w-fit px-10 py-3 mt-1 cursor-pointer mb-6"
            />

            <h1 className="text-gray-700 text-xl">Sign up today and you'll be able to:</h1>
            <ul className="pt-3 text-gray-600 pb-8">
              <li>✔ Speed your way through the checkout</li>
              <li>✔ Track your orders easily</li>
              <li>✔ Keep a record of all your purchases</li>
            </ul>
          </form>
        </div>

        {/* Login Redirect */}
        <div className="side2 border-t border-gray-400 md:border-none md:pl-20">
          <div>
            <h1 className="border-b-2 border-yellow-400 text-2xl text-gray-700 font-semibold w-32 pb-3">Login</h1>
            <hr className="text-gray-300" />
            <p className="text-gray-500 text-sm pt-2">Welcome back! Have an account</p>
          </div>

          <div className="md:pt-5 pb-8">
            <Link to="/accounts">
              <Button
                name="Login"
                className="bg-yellow-300 text-gray-700 font-semibold rounded-full w-full sm:w-fit px-10 py-3 mt-5 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
