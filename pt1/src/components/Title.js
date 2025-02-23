import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css";
import { Container, Row } from 'react-bootstrap';

const Title = () => {
    return (
        <Container fluid className="container-s bg-orange">
            <Row className="justify-content-center">
                <img src="images/AllStudent.png" alt="" className="w-100 ps-5 pe-5 mt-5 mb-5" />
            </Row>
        </Container>
    );
}

export default Title;
