'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from "next/navigation"; // Correct import for useRouter

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtonDisabled(!(user.email && user.username && user.password));
  }, [user]);

  const onSignUp = async () => {
    try {
      setLoading(true);
      await axios.post('/api/users/signup', user);
      router.push('/login');
    } catch (error:any) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-500 text-center">{loading ? 'Processing...' : 'Sign Up'}</h1>
        <hr />
        <div className="space-y-4">
          <label htmlFor="username" className="block font-medium text-gray-700">Username</label>
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="Enter your username"
          />
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Enter your password"
          />
        </div>
        <button
          disabled={buttonDisabled}
          onClick={onSignUp}
          className={`w-full p-3 mt-4 text-white bg-blue-500 rounded-lg ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          {buttonDisabled ? 'Fill All Fields' : 'Sign Up'}
        </button>
        <Link href="/login" className="text-blue-500 hover:underline">Visit login page</Link>
      </div>
    </div>
  );
}
