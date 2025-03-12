import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

// Component UserProfile2
const UserProfile2 = ({ name, age, onSubmit }) => {
    const [formData, setFormData] = useState({ name, age });
    const [errors, setErrors] = useState({});

    // Cập nhật state khi props thay đổi
    useEffect(() => {
        setFormData({ name, age });
    }, [name, age]);

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "number" ? Number(value) : value,
        });
    };

    // Kiểm tra lỗi dữ liệu trước khi submit
    const validateForm = () => {
        const newErrors = {};
        const trimmedName = formData.name.trim();
        const age = Number(formData.age);

        if (!trimmedName) newErrors.name = "Tên là bắt buộc!";
        if (!formData.age) newErrors.age = "Tuổi không được để trống!";
        else if (isNaN(age)) newErrors.age = "Tuổi phải là số hợp lệ!";
        else if (age < 18 || age > 100) newErrors.age = "Tuổi phải từ 18 đến 100!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Xử lý submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <Container>
            <h3>Thông Tin Người Dùng</h3>
            <Form onSubmit={handleSubmit}>
                {/* Trường tên */}
                <Form.Group controlId="formName">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường tuổi */}
                <Form.Group controlId="formAge">
                    <Form.Label>Tuổi</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.age}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Nút submit & reset */}
                <Button variant="primary" type="submit" className="me-2">
                    Gửi
                </Button>
                <Button variant="secondary" onClick={() => setFormData({ name, age })}>
                    Reset
                </Button>
            </Form>
        </Container>
    );
};

// Xác định PropTypes cho UserProfile2
UserProfile2.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSubmit: PropTypes.func.isRequired,
};

export default UserProfile2;
