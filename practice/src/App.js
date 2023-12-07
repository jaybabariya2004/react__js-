import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setdata] = useState([]);
  const [update, setupdate] = useState({});
  const title = useRef();
  const author = useRef();

  const getdata = () => {
    axios.get('http://localhost:3001/posts').then((res) => {
      // console.log(res.data);
      setdata(res.data || []);
    });
  }

  const createdata = () => {
    const maindata = {
      title: title.current.value,
      author: author.current.value
    };
    console.log(maindata)
    axios.post('http://localhost:3001/posts', maindata).then((res) => {
      // console.log(res.data);
      setdata([...data, res.data]);
    })
  }

  const deletedata = (id) => {
    console.log(id, "delete id");

    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setdata(data.filter((e) => e.id !== id));
    });
  };

  const updatedata = (id, ind) => {
    console.log(id, "id");
    console.log(ind, "ind");

    const final = data[ind];
    setupdate(final);
    console.log(final);
  }

const finalupdate = (e) => {
  setupdate({...update, [e.target.name]: e.target.value});
}

  const final = () => {
    axios.put(`http://localhost:3001/posts/${update.id}`,update).then((res) => {
      console.log(res.data);
      const updatedata = [...data];
      console.log(updatedata);
      const index = updatedata.findIndex((item)=> item.id === update.id);
      console.log(index);
      updatedata[index] = res.data;
      console.log(updatedata[index]);
      setdata(updatedata);
    })
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <input type="text" name='title' ref={title} />
      <input type="text" name='author' ref={author} />
      <button onClick={createdata}>Add</button>

      <input type="text" name='title' onChange={finalupdate} value={update.title}/>
      <input type="text" name='author' onChange={finalupdate} value={update.author}/>
      <button onClick={final}>Update</button>
      <div>
        {data.map((val, ind) => {
          return (
            <div>
              <h1>{val.id}</h1>
              <h2>{val.title}</h2>
              <h3>{val.author}</h3>
              <button onClick={() => deletedata(val.id)}>Delete</button>
              <button onClick={() => updatedata(val.id, ind)}>Update</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
