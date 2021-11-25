import { useState, useEffect } from 'react';
//import './App.css';

/*
Rules
Always use the setter for useState
Always put a dependancy array on useEffect, useCallback, useMemo
To run useEffect only once use an empty array
Don't depend on data you set
*/

function MyComponent() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    fetch("/numbers.json")
      .then((resp) => resp.json())
      .then((data) => {
        setNumbers(data);
      });
  }, []);

  const addOne = () => {
    setNumbers([...numbers, numbers.length + 1]);
  }

  return <div>
    <div>Numbers: {JSON.stringify(numbers)}</div>
    <button onClick={addOne}>Add one</button>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MyComponent />
    </div>
  );
}

export default App;
