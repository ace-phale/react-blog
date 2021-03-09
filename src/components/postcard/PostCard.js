import './PostCard.css';
import { useState } from 'react';
//components
import LoadingCard from '../../components/loadingcard/LoadingCard';

//react-bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//react-router-bootstrap
import { LinkContainer } from 'react-router-bootstrap';
//react-router
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  const { text, image, likes, link, tags, publishDate, owner, id } = props.post;
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  //cuts text if too long
  const displayText = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + '... read more';
    }
    return text;
  };

  const displayTags = tags.map((tag) => (
    <Container key={tag} className='small pl-0' style={{ color: '#E5383B' }}>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/tag/' + tag}>
        #{tag}
      </Link>
    </Container>
  ));
  return (
    <Container className='col-12 col-lg-4 p-lg-4 pb-3 '>
      <Card className='shadow-sm hoverShadow' style={{ height: '100%', backgroundColor: '' }}>
        {!imageIsLoaded && (
          <Container style={{ position: 'relative', paddingBottom: '56.2%' }}>
            <LoadingCard />
          </Container>
        )}

        <Link to={'/post/' + id} style={{ position: 'relative', paddingBottom: '56.2%', display: !imageIsLoaded ? 'none' : 'flex' }}>
          <Card.Img
            variant='top'
            onLoad={() => setImageIsLoaded(true)}
            src={image}
            style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>

        <Card.Body className='p-3 d-flex flex-column'>
          <Card.Title className='initialism font-weight-bold my-1'>
            <Link to={'/user/' + owner.id} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              {owner.firstName} {owner.lastName}
            </Link>
          </Card.Title>

          <Card.Subtitle className='font-weight-light mt-2 flex-grow-1'>
            <Link to={'/post/' + id} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              {displayText(text)}
            </Link>
          </Card.Subtitle>

          <Card.Subtitle className='font-weight-bold small my-2'>Likes: {likes}</Card.Subtitle>
          <Row>
            <Card.Subtitle className='col-7 mt-2 flex-grow'>{displayTags}</Card.Subtitle>
            <Col className='' style={{ position: 'relative' }}>
              <Link to={'/post/' + id}>
                <Button
                  className=''
                  style={{ position: 'absolute', bottom: '0', left: '100%', transform: 'translate(-119%, 0)' }}
                  size=''
                  variant='outline-dark'
                >
                  See more
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostCard;
