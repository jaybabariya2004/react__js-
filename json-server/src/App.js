import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';

// function App() {

//   const [data, setdata] = useState([]);
//   const [update, setupdate] = useState({})
//   const title = useRef();
//   const author = useRef();

//   const getdata = () => {
//     axios.get('http://localhost:3001/posts').then((res) => {
//       // console.log(res.data);
//       setdata(res.data || [])
//     })
//   }

//   const adddata = () => {
//     const record = {
//       title: title.current.value,
//       author: author.current.value
//     }
//     console.log(record, "record");
//     axios.post('http://localhost:3001/posts', record).then((res) => {
//       console.log(res.data);
//       setdata([...data, res.data])
//     })
//   }

//   const deleteData = (id) => {
//     console.log(id);

//     axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
//       setdata(data.filter((e) => e.id !== id));
//     });
//   };
  
//   const updates = (id,ind) => {
//     console.log(id,"id");
//     console.log(ind,"ind");

//     const result = data[ind];
//     setupdate(result);
//     console.log(result);
//   }

//   const finaldata = (e) => {
//     setupdate({...update, [e.title.name]: e.target.value})
//   };

//   const semiupdate = () => {
//     axios.put(`http://localhost:3001/posts/${update.id}`,update).then((res)=>{
//       console.log(res.data);
//     })
//   }

//   useEffect(() => {
//     getdata()
//   }, [])


//   return (
//     <div>

//       <input type="text" name='title' ref={title} />
//       <input type="text" name='author' ref={author} />
//       <button onClick={adddata}>Add</button>
//       <hr /><hr />

//       <input type="text" name='title' value={update.title} onChange={finaldata} />
//       <input type="text" name='author' value={update.author} onChange={finaldata} />
//       <button onClick={semiupdate}>Update</button>

//       <div>
//         {data.map((val, ind) => {
//           return (
//             <div>
//               <h1>{val.id}</h1>
//               <h2>{val.title}</h2>
//               <h3>{val.author}</h3>
//               <button onClick={() => deleteData(val.id)}>Delete</button>
//               <button onClick={() => updates(val.id,ind)}>Update</button>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

function App() {

  const [data, setdata] = useState([]);
  const [update, setupdate] = useState({});
  const title = useRef();
  const author = useRef();

  const getdata = () =>{
    axios.get("http://localhost:3001/posts").then((res) => {
      // console.log(res.data);
      setdata(res.data || []);
    })
  }

  const createData = () => {
    const mainData = {
      title: title.current.value,
      author: author.current.value
    };
    // console.log(mainData);

    axios.post("http://localhost:3001/posts",mainData).then((res) => {
      console.log(res.data);
      setdata([...data, res.data]);
    });
  };

  const deleteData = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3001/posts/${id}`).then(()=>{
      setdata(data.filter((e)=>e.id !== id));
    });
  };

  const updatedata = (id,ind) => {
    console.log(id,"id");
    console.log(ind,"ind");

    const final = data[ind];
    setupdate(final);
    console.log(final);
  }

  const finalupdate = (e) => {
    setupdate({...update, [e.target.name]: e.target.value});
  };

  const final = () => {
    axios.put(`http://localhost:3001/posts/${update.id}`,update).then((res) => {
      console.log(res.data,"update");
    })
  }

  useEffect(()=>{
    getdata();
  },[]);

  return (
    <div>

      <hr />
      <input type="text" name='title' ref={title}/>
      <input type="text" name='author' ref={author}/>
      <button onClick={createData}>Add</button><hr />

      <input type="text" name='title' value={update.title} onChange={finalupdate}/>
      <input type="text" name='author' value={update.author} onChange={finalupdate}/>
      <button onClick={final}>Update</button><hr />

      <div>
        {data.map((val, ind) => {
          return (
            <div>
              <h1>{val.id}</h1>
              <h2>{val.title}</h2>
              <h3>{val.author}</h3>
              <button onClick={() => deleteData(val.id)}>Remove</button>
              <button onClick={() => updatedata(val.id,ind)}>Update</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
