import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <Link to="/create">
        <Button variant="primary">Tạo bài viết mới</Button>
      </Link>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <Link to={`/edit/${post.id}`}>
                  <Button variant="warning" className="me-2">Sửa</Button>
                </Link>
                <Link to={`/delete/${post.id}`}>
                  <Button variant="danger">Xóa</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PostList;
