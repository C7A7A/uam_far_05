import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Pages } from './Pages'
import { Cart } from '../Cart/Cart'
import { Menu } from '../Menu/Menu'
import { Welcome } from '../Welcome/Welcome'
import { HandleWrongUrl } from '../HandleWrongUrl/HandleWrongUrl'
import { Navbar, Row, Container } from 'react-bootstrap'

export const Nav = () => {
  return (
    <BrowserRouter>
        <Navbar bg="dark" fixed="top" expand="lg">
          <Container fluid>
            <Row className="w-100"> 
              <Pages />
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
