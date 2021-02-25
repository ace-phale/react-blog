import Loader from 'react-loader-spinner';
import Container from 'react-bootstrap/Container';

const LoadingCard = () => {
  return (
    <Loader
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      type='TailSpin'
      color='#6c757d'
      height='200px'
      width='200px'
    />
  );
};

export default LoadingCard;
