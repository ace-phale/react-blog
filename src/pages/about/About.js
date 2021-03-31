import './About.css';
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//images
import css from '../../static/images/css-3.svg';
import js from '../../static/images/javascript.svg';
import rjs from '../../static/images/react.svg';

const About = () => {
  return (
    <Container className='aboutSection' style={{ maxWidth: '50em' }}>
      <h2>Hello there!</h2>
      <p>This single page application was build as a personal project by me.</p>
      <p>
        It uses static data from{' '}
        <a style={{ color: '#e5383b' }} href='https://dummyapi.io/'>
          dummyapi.io
        </a>{' '}
        to create an illusion of an active blog.
        <p>Data is fetched from the REST API when you explore the site, but posts cannot be added or modified.</p>
      </p>
      <h5>Technologies used: </h5>
      <Row className='text-center'>
        <Col>
          <Image className='techImage' src={js} />
        </Col>
        <Col>
          <Image className='techImage' src={css} />
        </Col>
        <Col>
          <Image className='techImage' src={rjs} />
        </Col>
      </Row>
      <h5>Libraries used:</h5>
      <p>react-router-dom; react-bootstrap; react-router-bootstrap; react-autosuggest; react-loader-spinner</p>
      <h5>Contact:</h5>
      <p>patryk.syka@gmail.com</p>
      <hr />
      <Row className='justify-content-end'>
        <div className='pr-5'>Patryk Syka</div>
      </Row>
    </Container>
  );
};

export default About;
