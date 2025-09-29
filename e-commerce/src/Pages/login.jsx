import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("emilys"); // default dummy user
  const [password, setPassword] = useState("emilyspass");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional
        }),
      });

      const data = await res.json();
      if (data.accessToken) {
        setMessage("✅ Login successful!");
        setToken(data.accessToken);
        localStorage.setItem("token", data.accessToken); // save token
      } else {
        setMessage("❌ Login failed! " + (data.message || ""));
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 mb-3 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>

        {message && <p className="mt-3 text-center">{message}</p>}
        {token && (
          <p className="mt-2 text-xs text-gray-500 break-all">
            Access Token: {token}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
