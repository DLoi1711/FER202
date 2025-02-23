import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css";
import { Container, Row, Col, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="container-s bg-eacdad" expand="lg">
            <Container>
                <Row className="w-100 align-items-center">
                    <Col md={9}>
                        <div className="items d-flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
                                className="bg-eacdad mt-2 fpt-logo ps-5" alt="FPT Logo" />

                            <Nav className="a-items d-flex mt-2 ps-2">
                                <Nav.Link href="#" className="mt-4 d-flex pe-2 text-decoration-none text-orange">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className="icon bg-orange" alt="" />
                                    <div>Trang Chủ</div>
                                </Nav.Link>
                                <Nav.Link href="#" className="mt-4 d-flex pe-2 text-decoration-none text-orange">
                                    <img src="https://cdn-icons-png.flaticon.com/512/12589/12589242.png" className="icon bg-orange" alt="" />
                                    <div>Ngành Học</div>
                                </Nav.Link>
                                <Nav.Link href="#" className="mt-4 d-flex pe-2 text-decoration-none text-orange">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png" className="icon bg-orange" alt="" />
                                    <div>Tuyển Sinh</div>
                                </Nav.Link>
                                <Nav.Link href="#" className="mt-4 d-flex pe-2 text-decoration-none text-orange">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" className="icon bg-orange" alt="" />
                                    <div>Sinh Viên</div>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>

                    <Col md={3}>
                        <Form className="search d-flex mt-4">
                            <div className="pe-2">Search: </div>
                            <FormControl type="text" className="ps-5" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;