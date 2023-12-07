import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [data, setdata] = useState([])

  const [value, setvalue] = useState([])

  const handle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);
  console.log(data, "res");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
      res.json().then((result) => {
        console.log(result);
        setdata(result || []);
      });
    });
  }, []);

  return (
    <div>
      <h1>{ }</h1>
      <div>
        {data.map((val, ind) => {
          return (
            <>
              <h1>{val.id}</h1>
              <h2>{val.title}</h2>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
