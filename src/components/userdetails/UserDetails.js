import './UserDetails.css';

const UserDetails = (props) => {
  const { dateOfBirth, email, firstName, gender, id, lastName, location, picture, title } = props.user;

  return (
    <div>
      <img src={picture} />
    </div>
  );
};

export default UserDetails;
