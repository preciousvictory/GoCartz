import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import "../css/Nav.css";
import Nav1 from './Nav';
import NavMobile from './NavMobile';
import MediaQuery from 'react-responsive'

function Navbar() {
    return (
      <Container fluid className="navbar p-0"  style={{ top: 0, position: "sticky", zIndex: 1}}>
        <Nav1/>
        <NavMobile /> 
      </Container>
    );
  }
  
export default Navbar;
  