'use client';
import React, { useState } from "react";
import ErrorToast from "@/components/ErrorToast"; //"@/components/ErrorToast";
import { useRouter } from 'next/navigation'
// import ToggleTheme from "@/components/ToggleTheme";

export default function LoginPage() {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    if (!username || !password || username.trim() === '' || password.trim() === '' || !event.target.username.value || !event.target.password.value) {
      setError('Username and password are required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.token) {
        // Store the token or user ID securely
        console.log('Logged in successfully!');
        // Redirect to another page
        router.push('/bento'); // Adjust the path as needed
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <ToggleTheme /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-dark-900"
        style={{
          backgroundImage: "url('/bento-background-2.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}>
        <h1 className="text-4xl text-white font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} method="POST" className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="block w-full p-4 text-lg text-gray-700 border border-gray-300 rounded-lg"
              // onChange={(e) => setUsername(e.target.value)}
              name='username'
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="block w-full p-4 text-lg text-gray-700 border border-gray-300 rounded-lg"
              // onChange={(e) => setPassword(e.target.value)}
              name='password'
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </form>
        {error && <ErrorToast errorMessage={error} onClose={() => setError(null)} />}
      </div>
    </>
  );
}