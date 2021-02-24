//react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//react-router-bootstrap
import { LinkContainer } from 'react-router-bootstrap';

//static
import { NAV_LINKS } from '../../static/headerStatic';

const NavigationBar = () => {
  const navlinks = NAV_LINKS.map((link) => (
    <LinkContainer key={link.name} to={link.link}>
      <Nav.Link>{link.name}</Nav.Link>
    </LinkContainer>
  ));

  return (
    <Navbar
      className='p-3'
      collapseOnSelect
      expand='sm'
      bg='dark'
      variant='dark'
    >
      <Navbar.Toggle aria-controls='navbar-collapse' />
      <Navbar.Collapse className='justify-content-between' id='navbar-collapse'>
        <Nav className='flex-fill'>{navlinks}</Nav>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search tag'
            className='mr-2'
            style={{ width: 'auto' }}
          />
          <Button variant='outline-light'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
