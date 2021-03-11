import './UserDetails.css';

//react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
const UserDetails = (props) => {
  const { dateOfBirth, email, firstName, gender, id, lastName, registerDate, location, picture, title } = props.user;

  return (
    <Container style={{ width: '80%' }} fluid>
      <Row>
        <Col className='col-12 mt-3'>
          <Card>
            <Container className='p-0' style={{ display: 'flex', flex: '1 1 auto' }}>
              <Image src={picture} alt='Card image cap' />
              <Card.Body>
                <Card.Title className='mb-3'>
                  {firstName} {lastName}
                </Card.Title>
                <Card.Text>
                  {location.city}, {location.country}
                </Card.Text>
                <Card.Text>{email}</Card.Text>
              </Card.Body>
            </Container>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
