import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/posts", { title, content });
    navigate("/posts");
  };

  return (
    <div>
      <h2>Tạo bài viết mới</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Button type="submit" className="mt-3">Tạo</Button>
      </Form>
    </div>
  );
};

export default CreatePost;
