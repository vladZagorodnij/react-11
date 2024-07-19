import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleChosenCount(value) {
    setChosenCount(value);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleChosenCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
