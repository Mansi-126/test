import React from "react";

function Login() {
  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div>
      <h2>Please Sign In</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;