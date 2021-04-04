import Loader from 'react-loader-spinner';
import Container from 'react-bootstrap/Container';
const LoadingCard = () => {
  return (
    <Container className='d-flex justify-content-center p-5 m-5'>
      <Loader type='TailSpin' color='#299bed' height='200px' width='200px' />
    </Container>
  );
};

export default LoadingCard;
