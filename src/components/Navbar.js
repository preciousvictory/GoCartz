import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import "../css/Nav.css";
import Nav1 from './Nav';
import NavMobile from './NavMobile';
import MediaQuery from 'react-responsive';

function Navbar() {
    return (
      <Container fluid className="navbar p-0"  style={{ top: 0, position: "sticky", zIndex: 1}}>
        <MediaQuery minWidth={600}>
          {/* <p>You also have a huge screen</p> */}
          <Nav1/>
        </MediaQuery>

        <MediaQuery maxWidth={600}>
          {/* <p>You also have a small screen</p> */}
          <NavMobile /> 
        </MediaQuery>
      </Container>
    );
  }
  
export default Navbar;
  