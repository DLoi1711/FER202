import React, { useReducer, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Trạng thái ban đầu của form
const initialState = {
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
    isSubmitted: false,
};

// Reducer để cập nhật trạng thái
const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };
        case "SUBMIT":
            return { ...state, isSubmitted: true };
        default:
            return state;
    }
};

const UserForm = ({ title, onSubmit }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value: type === "checkbox" ? checked : value });
    };

    const validate = () => {
        const newErrors = {};
        if (!state.name || state.name.length < 3 || state.name.length > 50)
            newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
        
        if (!state.age || isNaN(state.age) || state.age < 18 || state.age > 100)
            newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";

        if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
            newErrors.email = "Email không hợp lệ!";

        if (!state.phone || !/^\d{10,15}$/.test(state.phone))
            newErrors.phone = "Số điện thoại phải có từ 10 đến 15 chữ số!";

        if (!state.agree) newErrors.agree = "Bạn phải đồng ý với điều khoản!";

        setErrors(newErrors);
        setShowAlert(Object.keys(newErrors).length > 0);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch({ type: "SUBMIT" });
            onSubmit(state);
        }
    };

    return (
        <Container>
            <h3>{title}</h3>
            {showAlert && <Alert variant="danger">Vui lòng kiểm tra các trường hợp lỗi.</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Tên</Form.Label>
                    <Form.Control type="text" name="name" value={state.name} onChange={handleChange} isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tuổi</Form.Label>
                    <Form.Control type="number" name="age" value={state.age} onChange={handleChange} isInvalid={!!errors.age} />
                    <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={state.email} onChange={handleChange} isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" name="phone" value={state.phone} onChange={handleChange} isInvalid={!!errors.phone} />
                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Check type="checkbox" label="Đồng ý với điều khoản" name="agree" checked={state.agree} onChange={handleChange} isInvalid={!!errors.agree} />
                    <Form.Control.Feedback type="invalid">{errors.agree}</Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Gửi</Button>
            </Form>
        </Container>
    );
};

UserForm.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
