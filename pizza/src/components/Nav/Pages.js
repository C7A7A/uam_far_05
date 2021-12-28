import React from 'react'
import BootstrapNav from 'react-bootstrap/Nav'
import {
  Link
} from "react-router-dom"
import { Col } from 'react-bootstrap'

export const Pages = () => {
  const pages = ['Welcome', 'Menu', 'Cart']

  return (
    <>
      {
      pages.map((page) => {
        return (
          <Col key={page}>
            <BootstrapNav.Link as={Link} to={`/${page === 'Welcome' ? '' : page}`} className="text-white navbar_pages_link"> 
              {page.toUpperCase()}
            </BootstrapNav.Link>
          </Col>
        )
      })
      }
    </>
  )
}
