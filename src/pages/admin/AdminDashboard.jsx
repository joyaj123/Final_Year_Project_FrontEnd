import React from "react";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin 👋</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}