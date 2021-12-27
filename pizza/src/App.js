import './App.scss';
import { Nav } from './components/Nav'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App h-100 bg-light">
      <Container className="h-100">
        <Nav />
      </Container>
    </div>
  );
}

export default App;
