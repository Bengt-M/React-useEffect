import { useState, useEffect, useCallback } from 'react';
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

  const addOne = useCallback(() => {
    setNumbers((currentNumbers) => [
      ...currentNumbers,
      currentNumbers.length + 1,
    ]);
  }, []);

  const sum = numbers.reduce((a, v) => a + v, 0);

  return <div>
    <div>Numbers: {JSON.stringify(numbers)}</div>
    <button onClick={addOne}>Add one</button>
    <div>sum: {sum}</div>
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
