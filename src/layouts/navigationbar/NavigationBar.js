import './NavigationBar.css';
//react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
//react-router-bootstrap
import { LinkContainer } from 'react-router-bootstrap';

//react-router
import { useLocation, NavLink } from 'react-router-dom';
//components
import NavbarSearch from '../../components/navbarsearch/NavbarSearch.js';
//static
import { NAV_LINKS } from '../../static/headerStatic';
import logo from '../../static/images/viewsight.png';

const NavigationBar = () => {
  const location = useLocation();

  const navlinks = NAV_LINKS.map((link) => (
    <LinkContainer key={link.name} to={link.link}>
      <Nav.Link>{link.name}</Nav.Link>
    </LinkContainer>
  ));

  return (
    <Navbar className='' collapseOnSelect expand='md' style={{ backgroundColor: '#FFFAA' }}>
      <Navbar.Brand>
        <NavLink to='/'>
          <Image style={{ height: '1.8em' }} src={logo} />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar-collapse' />
      <Navbar.Collapse className='justify-content-between' id='navbar-collapse'>
        <Nav className='flex-fill'>{navlinks}</Nav>
        {/* searchbox only visible outside of homepage */}
        {location.pathname !== '/' ? <NavbarSearch /> : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
