import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Container className="mt-4">
        <h1 className="text-center mb-4">Quản lý Bài Viết</h1>
        <Suspense fallback={<div className="text-center"><Spinner animation="border" /></div>}>
          <Routes>
            <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/posts" element={isAuthenticated ? <PostList /> : <Navigate to="/" />} />
            <Route path="/create" element={isAuthenticated ? <CreatePost /> : <Navigate to="/" />} />
            <Route path="/edit/:id" element={isAuthenticated ? <EditPost /> : <Navigate to="/" />} />
            <Route path="/delete/:id" element={isAuthenticated ? <DeletePost /> : <Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
