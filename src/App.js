import { useState } from 'react';
import './App.css';

function App() {
  const [lit, setLit] = useState(false);
  const brightness = lit ? 'lit' : 'dark';

  return (
    <main className={`App ${brightness}`}>
      <div>
        <input onClick={() => setLit(!lit)} class='l' type='checkbox' />
      </div>
    </main>
  );
}

export default App;
