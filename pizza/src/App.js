import './App.scss'
import { Nav } from './components/Nav/Nav'
import { Container } from 'react-bootstrap'
import { StateMachineProvider, createStore } from 'little-state-machine'

createStore({
  order: {
    pizzas: {},
    sauces: {},
    price: 0
  }
})

export const App = () => {
  return (
    <StateMachineProvider>
      <div className="App h-100 bg-light">
        <Container className="h-100">
          <Nav />
        </Container>
      </div>
    </StateMachineProvider>
  );
}
