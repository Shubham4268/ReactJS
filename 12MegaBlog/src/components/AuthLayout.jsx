/* This file makes sure that the user is authenticated and checks if authentication is required or not.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Check if authentication is required and user is not authenticated
    if (authentication && !authStatus) {
      navigate("/login"); // Redirect to the login page
    }
    // Check if authentication is not required and user is authenticated
    else if (!authentication && authStatus) {
      navigate("/"); // Redirect to the home page
    }
    // Set loader state to indicate loading is complete
    setLoading(false);
  }, [authStatus, navigate, authentication]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
}
