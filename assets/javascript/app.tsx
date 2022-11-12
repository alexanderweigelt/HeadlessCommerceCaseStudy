import React, { ReactElement } from "react";
import { RouterProvider, Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import { Category, categoryLoader } from "./routes/Category";
import { Home } from "./routes/Home";
import { NoMatch } from "./routes/NoMatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { faSquareGithub, faSquareXing, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { NavDropdown, Container, Nav, Navbar, Form, Col } from "react-bootstrap";
import classNames from "classnames";
import { ProductProvider } from "./context/Product";

const Layout = (): ReactElement => {
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
                                    {/** I decided not to generate the navigation dynamically from the categories (API).
                                     Reason: the shop owner may not want to show all categories in the menu.
                                     Furthermore, it is not possible to determine the order from the result of the API
                                     in a meaningful way. It is better to provide the data in a different way, like a
                                     navigation API. */}
                                    <NavDropdown.Item onClick={() => handleClick('/category/headgear')}>
                                        Headgear
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/tops')}>
                                        Tops
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/bottoms')}>
                                        Bottoms
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/caps')}>
                                        Caps
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/pants')}>
                                        Pants
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/shirts')}>
                                        Shirts
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/shorts')}>
                                        Shorts
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/tanks')}>
                                        Tanks
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleClick('/category/shoes')}>
                                        Shoes
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

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Home/> },
            {
                path: "/category/:slug",
                element:
                    <ProductProvider>
                        <Category/>
                    </ProductProvider>,
                loader: categoryLoader,
                errorElement: <NoMatch/>
            },
            { path: "*", element: <NoMatch/> },
        ],
    }
]);

export const App = (): ReactElement => {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
