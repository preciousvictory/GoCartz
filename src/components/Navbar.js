import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import "../css/Nav.css";
import Nav1 from './Nav';

function Navbar() {
    return (
      <Container fluid className="navbar p-0">
        <Nav1 />
      </Container>
    );
  }
  
  export default Navbar;
  