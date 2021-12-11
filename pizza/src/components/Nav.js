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

export const Nav = () => {
  return (
    <BrowserRouter>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}
