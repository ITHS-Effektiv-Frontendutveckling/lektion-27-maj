import { useContext } from 'react';
import { UserContext } from '../App';
 
function DisplayUsername() {
  const username = useContext(UserContext);
  console.log(username);
  return (
    <article>
      <h2>Användarnamn: { username }</h2>
    </article>
  )
}

export default DisplayUsername;