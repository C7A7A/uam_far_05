import './App.scss'
import { Nav } from './components/Nav/Nav'
import { Container } from 'react-bootstrap'
// import { useState } from 'react'

export const App = () => {
  return (
    <div className="App h-100 bg-light">
      <Container className="h-100">
        <Nav />
      </Container>
    </div>
  );
}
