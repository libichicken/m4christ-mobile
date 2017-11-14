import React from 'react';
import Navbar from "react-bootstrap/es/Navbar";
import Link from "react-router-dom/es/Link";

const Appbar = () => (
    <Navbar>
        <Navbar.Brand>
            <Link to="/">耶穌是主</Link>
        </Navbar.Brand>
    </Navbar>
);

export default Appbar;