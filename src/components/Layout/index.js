import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

const Layout = ({ children }) => {
    return (
        <Container className="my-3 p-3" as="section">
            <Row>
                <Col>{children}</Col>
            </Row>
        </Container>
    );
};

export default Layout;
