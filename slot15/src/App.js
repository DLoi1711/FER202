import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import { Container } from "react-bootstrap";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      {isAuthenticated && <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
      <Container>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        {isAuthenticated ? (
          <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
          </>
          ) : (
          <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
