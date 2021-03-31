//css
import './postdetails.css';

//react-bootstrap
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

//react-router
import { Link } from 'react-router-dom';

const PostDetails = (props) => {
  const { text, image, likes, link, tags, publishDate, owner, id } = props.post;

  const displayTags = tags.map((tag) => (
    <Link className='tag mr-2 pr-2' key={tag} style={{ textDecoration: 'inherit', color: '#e5383b' }} to={'/tag/' + tag}>
      #{tag}
    </Link>
  ));

  return (
    <>
      <Container className='px-0' style={{ minWidth: '100%' }}>
        <Container className='px-0  mb-3' style={{ minWidth: '100%', position: 'relative', paddingBottom: '56.2%' }}>
          <Image src={image} className='m-0 shadow' style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }} />
        </Container>
        <Container style={{ width: '50em', maxWidth: '100%' }} className=''>
          <Container style={{ fontSize: '1.2rem' }} className='borderEffect mt-3 mt-md-5 font-weight-bolder text-dark'>
            <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to={'/user/' + owner.id}>
              {owner.firstName} {owner.lastName}
            </Link>
          </Container>
          <Container className='py-2 borderNoEffet'>{text}</Container>
          <Container className='borderEffect'>{displayTags}</Container>
        </Container>
      </Container>
    </>
  );
};

export default PostDetails;
