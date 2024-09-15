import { useParams } from 'react-router-dom';

function UserDetails() {
  // Get the dynamic parameter from the URL
  const { userId } = useParams();
  const { name } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userId}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default UserDetails;