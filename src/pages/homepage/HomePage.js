//react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//components
import NavbarSearch from '../../components/navbarsearch/NavbarSearch';

const HomePage = () => {
  return (
    <Container className='aboutSection text-center mt-5' style={{ maxWidth: '50em' }}>
      <h2>Welcome on Viewsight</h2>
      <p>Select one of the popular tags above, or type in tag in the searchbox and start exploring.</p>
      <Row className='d-flex justify-content-center my-5'>
        <NavbarSearch />
      </Row>
    </Container>
  );
};

export default HomePage;
