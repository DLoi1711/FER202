import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function FlightBooking() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    from: "Hà Nội",
    to: "Hà Nội",
    go: false,
    return: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      borderBottom: "1px solid #ddd",
      paddingBottom: "10px",
    },
    title: {
      fontSize: "24px",
      color: "#007bff",
    },
    closeButton: {
      background: "none",
      border: "none",
      fontSize: "20px",
      color: "#888",
      cursor: "pointer",
    },
    group: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "5px 10px",
      background: "#f9f9f9",
    },
    input: {
      flex: "1",
      border: "none",
      outline: "none",
      background: "none",
      padding: "5px",
    },
    hint: {
      fontSize: "12px",
      color: "#888",
    },
    select: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      background: "#f9f9f9",
    },
    fieldset: {
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      background: "#f9f9f9",
    },
    legend: {
      fontWeight: "bold",
    },
    submitButton: {
      display: "block",
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      color: "#fff",
      background: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    submitButtonHover: {
      background: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Form đặt vé máy bay</h2>
        <button style={styles.closeButton}>&times;</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={styles.group}>
          <label style={styles.label}>Họ tên:</label>
          <div style={styles.inputContainer}>
            <FaUser style={{ marginRight: "10px", color: "#888" }} />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Họ tên"
              style={styles.input}
              required
            />
            <span style={{ color: "#888" }}>vnd</span>
          </div>
          <p style={styles.hint}>Phải nhập 5 ký tự, in hoa...</p>
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Địa chỉ:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Nhập địa chỉ"
            style={{ ...styles.input, border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
            required
          />
          <p style={styles.hint}>Phải nhập 5 ký tự, in hoa...</p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={styles.group}>
            <label style={styles.label}>Đi từ:</label>
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Đến:</label>
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
        </div>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Chọn chiều đi (Khứ hồi)</legend>
          <label>
            <input
              type="checkbox"
              name="go"
              checked={formData.go}
              onChange={handleChange}
              style={{ marginRight: "10px" }}
            />
            Đi
          </label>
          <label>
            <input
              type="checkbox"
              name="return"
              checked={formData.return}
              onChange={handleChange}
              style={{ marginRight: "10px" }}
            />
            Về
          </label>
        </fieldset>

        <button
          type="submit"
          style={styles.submitButton}
          onMouseOver={(e) => (e.target.style.background = styles.submitButtonHover.background)}
          onMouseOut={(e) => (e.target.style.background = styles.submitButton.background)}
        >
          Đặt vé
        </button>
      </form>
    </div>
  );
}
