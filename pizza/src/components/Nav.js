import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { Cart } from './Cart/Cart'
import { Menu } from './Menu/Menu'
import { Welcome } from './Welcome/Welcome'
import { HandleWrongUrl } from './HandleWrongUrl/HandleWrongUrl'
import { Navbar, Row, Container, Col } from 'react-bootstrap'
import BootstrapNav from 'react-bootstrap/Nav'

const pages = ['Welcome', 'Menu', 'Cart']

export const Nav = () => {
  return (
    <BrowserRouter>
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
          <Container fluid>
            <Row className="w-100"> 
              {
                pages.map( (page) => {
                  return (
                    <Col key={page}>
                      <BootstrapNav.Link as={Link} to={`/${page === 'Welcome' ? '' : page}`} className="text-white"> 
                        {page.toUpperCase()}
                      </BootstrapNav.Link>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        </Navbar>
        

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<HandleWrongUrl />} />
        </Routes>

    </BrowserRouter>
  )
}
