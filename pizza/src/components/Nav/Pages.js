import React from 'react'
import BootstrapNav from 'react-bootstrap/Nav'
import {
  Link
} from "react-router-dom"
import { Col } from 'react-bootstrap'

export const Pages = () => {
  const pages = ['Welcome', 'Menu', 'Cart']

  const hoverOn = (event) => {
    event.target.style.color = "#157347"
  }

  const hoverOff = (event) => {
    event.target.style.color = "#ffffff"
  }

  return (
    <>
      {
      pages.map((page) => {
        return (
          <Col key={page}>
            <BootstrapNav.Link 
              as={Link} 
              to={`/${page === 'Welcome' ? '' : page}`} 
              className='navbar_pages_link' 
              style={{color: '#ffffff'}}
              onMouseEnter={(event) => hoverOn(event)} 
              onMouseLeave={(event) => hoverOff(event)}
            > 
              {page.toUpperCase()}
            </BootstrapNav.Link>
          </Col>
        )
      })
      }
    </>
  )
}
