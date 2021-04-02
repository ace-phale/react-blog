import './NotFound404.css';

//components
import ErrorMessage from '../../components/errormessage/ErrorMessage.js';
//react-bootstrap
import Container from 'react-bootstrap/Container';

const NotFound404 = (props) => {
  const { status, error } = props;

  return (
    <Container className='404Section text-center' style={{ maxWidth: '50em' }}>
      <h1>This page cannot be loaded.</h1>

      {status && error ? <ErrorMessage status={status} errorMessage={error.message} /> : ''}
    </Container>
  );
};

export default NotFound404;
