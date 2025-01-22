import React, { useState, useEffect } from "react";

function LoginPage() {
  // Step 1: Define states
  const [userName, setUserName] = useState(""); // For storing username
  const [password, setPassword] = useState(""); // For storing password
  const [error, setError] = useState("");       // For validation message
  const [isSubmitted, setIsSubmitted] = useState(false); // Submission state

  // Step 2: Define the correct username
  const correctUserName = "OmYeole";

  // Step 3: useEffect to handle validation message on form submission
  useEffect(() => {
    if (isSubmitted) {
      if (userName === correctUserName) {
        setError("Login Successful!");
      } else {
        setError("Invalid Username. Try Again!");
      }
      setIsSubmitted(false); // Reset submission state after validation
    }
  }, [isSubmitted, userName]);

  // Step 4: Handle submit button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    setIsSubmitted(true); // Trigger validation
  };

  // Step 5: Handle reset button
  const handleReset = () => {
    setUserName("");
    setPassword("");
    setError("");
  };

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username"
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "5px 10px", marginRight: "10px" }}>Submit</button>
        <button type="button" onClick={handleReset} style={{ padding: "5px 10px" }}>Reset</button>
      </form>
      {error && <p style={{ color: userName === correctUserName ? "green" : "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
