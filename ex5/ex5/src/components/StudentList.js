import React from "react";
import { Container, Row } from "react-bootstrap";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const students = [
    { id: "DE160182", name: "Nguyen Huu Quoc Khanh", location: "Da Nang", image: "images/Std1.png" },
    { id: "DE160183", name: "Chau Vinh Thien", location: "Quang Nam", image: "images/Std2.png" },
    { id: "DE160184", name: "Do Nguyen Phuc", location: "Quang Nam", image: "images/Std3.png" },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </Row>
    </Container>
  );
};

export default StudentList;