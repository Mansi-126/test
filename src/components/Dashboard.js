import React from "react";

function Dashboard({ user }) {
  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <img src={user.photos[0].value} alt="profile" />
      <p>Email: {user.emails[0].value}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;