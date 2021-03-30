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
    <Container className='col-lg-7 p-3' fluid>
      <Row className='px-1'>
        <Col className='col-12 my-3 '>
          <Card className='shadow-sm'>
            <Container className='p-0 m-0' style={{ display: 'flex', flex: '1 1 auto' }}>
              <Image style={{ borderRadius: '3px' }} src={picture} alt='Card image cap' />
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
