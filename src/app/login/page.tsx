'use client'

import Link from "next/link";
import React, { useState } from "react";
import axios from 'axios'; // Corrected import

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600">Login</h1>
        <hr />
        <div className="space-y-4">
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input 
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
          <input 
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={onLogin}
          className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Login Here
        </button>
        <p className="text-center mt-2 text-blue-600">
          Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">SingUp</Link>
        </p>
      </div>
    </div>
  );
}
