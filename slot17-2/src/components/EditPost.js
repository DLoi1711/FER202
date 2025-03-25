import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
    navigate("/posts");
  };

  return (
    <div>
      <h2>Chỉnh sửa bài viết</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Button type="submit" className="mt-3">Cập nhật</Button>
      </Form>
    </div>
  );
};

export default EditPost;
