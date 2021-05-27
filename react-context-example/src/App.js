import './App.css';
import { useState, createContext } from 'react';

import ChangeUsername from './components/ChangeUsername';
import DisplayUsername from './components/DisplayUsername';

//Skapar upp vårt context, kan liknas med createStore i Redux
const UserContext = createContext(undefined);
const UpdateContext = createContext(undefined);

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      { /** Gör vårt context tillgängligt för komponenterna som ligger i och sätter ett värde
       * Detta värde är det vi vill komma åt i de andra komponenterna */}
      <UserContext.Provider value={ username }>
        <UpdateContext.Provider value={ setUsername }>
          <ChangeUsername />
          <DisplayUsername />
        </UpdateContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext, UpdateContext };
