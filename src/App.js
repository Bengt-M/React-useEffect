import { useState } from 'react';
//import './App.css';


function MyComponent() {
  const numbers = useState([]);

  fetch("/numbers.json")
    .then((resp) => resp.json())
    .then((data) => (numbers[0] = data));

  return <div>
    <div>Numbers: {JSON.stringify(numbers[0])}</div>
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
