import React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, useRoutes, useNavigate } from "react-router-dom";
import { Category } from "./routes/Category";
import { Home } from "./routes/Home";
import { NoMatch } from "./routes/NoMatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { faSquareGithub, faSquareXing, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { NavDropdown, Container, Nav, Navbar, Form, Col } from "react-bootstrap";
import classNames from "classnames";

export const App = () => {
    let routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                { index: true, element: <Home/> },
                {
                    path: "/category/:id",
                    element: <Category/>
                },
                { path: "*", element: <NoMatch/> },
            ],
        },
    ];

    let element = useRoutes(routes);

    return (
        <div className={'container-fluid'}>
            {element}
        </div>
    );
}

const Layout = () => {
    const navigate = useNavigate();

    function handleClick(path: string) {
        navigate(path, { replace: true });
    }

    return (
        <div className={'container'}>
            <header>
                <Navbar bg={'light'} expand={'lg'}>
                    <Container fluid={true}>
                        <Navbar.Brand onClick={() => handleClick('/')} role="button">
                            <FontAwesomeIcon icon={faStore}/> Case study for headless e-commerce
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"/>
                        <Navbar.Collapse id={'navbar'}>
                            <Nav className={'me-auto'}>
                                <Nav.Link onClick={() => handleClick('/')}>Home</Nav.Link>
                                <NavDropdown title="Categories" id="basic-nav-dropdown">
                                    {/** ToDo: load category collection from API /api/categories */}
                                    <NavDropdown.Item onClick={() => handleClick('/category/1')}>
                                        Headgear
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/2')}>
                                        Tops
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form>
                                <Form.Control type={'text'} id="search" placeholder="Search" aria-label="Search"/>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main className={'my-4'}>
                <Outlet/>
            </main>
            <footer className={classNames('d-flex', 'flex-wrap', 'justify-content-between', 'align-items-center',
                'py-3', 'my-4', 'border-top')}>
                <Col md={4} className={classNames('d-flex', 'align-items-center')}>
                    <address className={'author'}>
                        <FontAwesomeIcon icon={faCopyright}/> 2022 by
                        <a rel="author" href="mailto:webdesign@alexander-weigelt.de"
                           className={classNames('link-secondary', 'ps-2')}>
                            Alexander Weigelt
                        </a>
                    </address>
                </Col>
                <ul className={classNames('nav', 'col-md-4', 'justify-content-end', 'list-unstyled', 'd-flex', 'fs-3')}>
                    <li className={'ms-3'}>
                        <a className={'text-muted'} href="https://github.com/alexanderweigelt">
                            <FontAwesomeIcon icon={faSquareGithub}/>
                        </a>
                    </li>
                    <li className={'ms-3'}>
                        <a className={'text-muted'} href="https://www.xing.com/profile/Alexander_Weigelt12">
                            <FontAwesomeIcon icon={faSquareXing}/>
                        </a>
                    </li>
                    <li className={'ms-3'}>
                        <a className={'text-muted'} href="https://de-de.facebook.com/derAlexanderWeigelt">
                            <FontAwesomeIcon icon={faSquareFacebook}/>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
