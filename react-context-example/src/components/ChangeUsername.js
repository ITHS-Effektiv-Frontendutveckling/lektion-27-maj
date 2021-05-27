import { useState, useContext } from 'react';
import { UpdateContext, UserContext } from '../App';

function ChangeUsername() {
  const update = useContext(UpdateContext);
  const user = useContext(UserContext);
  const [username, setUsername] = useState(user);
  
  return (
    <section>
      <input type="text" placeholder="Nytt användarnamn" 
      onKeyUp={ (event) => { setUsername(event.target.value)} } />
      <button onClick={ () => { update(username) } }>Ändra</button>
    </section>
  )
}

export default ChangeUsername;