import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardInfor = ({ student }) => (
    <Card className="stu-detail-card border border-dark" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={student.img} className="stu-img" />
        <Card.Body>
            <div className="d-flex justify-content-center mt-3">{student.mssv}</div>
            <div className="d-flex justify-content-between ps-3 pe-3 mt-3">
                <div>{student.name}</div>
                <div>{student.location}</div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <div className="me-4">
                    <input type="radio" name={`attendance-${student.mssv}`} id={`present-${student.mssv}`} />
                    <label htmlFor={`present-${student.mssv}`} className="ms-1">Present</label>
                </div>
                <div>
                    <input type="radio" name={`attendance-${student.mssv}`} id={`absent-${student.mssv}`} />
                    <label htmlFor={`absent-${student.mssv}`} className="ms-1">Absent</label>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Button className="bg-orange text-white">Submit</Button>
            </div>
        </Card.Body>
    </Card>
);

const StudentCard = () => {
    const students = [
        { name: "Nguyen Huu Quoc Khanh", mssv: "DE181082", location: "Da Nang", img: "images/Std1.png" },
        { name: "A B C", mssv: "DE181082", location: "Da Nang", img: "images/Std2.png" },
        { name: "B D E", mssv: "DE181082", location: "Da Nang", img: "images/Std3.png" },
        { name: "D Q l", mssv: "DE181082", location: "Da Nang", img: "images/Std4.png" }
    ];

    return (
        <Container fluid className="container-s">
            <div className="text-center py-3">
                <span className="text-orange">Home /<span className="text-black"> Student</span></span>
            </div>
            <h1 className="text-center fw-bold my-5">Student Detail</h1>
            <Row className="justify-content-center">
                {students.map((student, index) => (
                    <Col key={index} md={6} className="d-flex justify-content-center mb-4">
                        <CardInfor student={student} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StudentCard;
