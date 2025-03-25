import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Alert } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    navigate("/posts");
  };

  return (
    <div>
      <h2>Xóa bài viết</h2>
      <Alert variant="danger">Bạn có chắc chắn muốn xóa bài viết này?</Alert>
      <Button variant="danger" onClick={handleDelete} className="me-2">Xóa</Button>
      <Button variant="secondary" onClick={() => navigate("/posts")}>Hủy</Button>
    </div>
  );
};

export default DeletePost;
