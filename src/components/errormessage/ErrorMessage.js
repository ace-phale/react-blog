const ErrorMessage = (props) => {
  const { status, errorMessage } = props;
  return (
    <>
      <h3>Status: {status}</h3>
      <p>{errorMessage} </p>
    </>
  );
};

export default ErrorMessage;
