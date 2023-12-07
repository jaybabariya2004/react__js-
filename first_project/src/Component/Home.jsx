import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const data = [{
    id: 1,
    title: "card-1",
    desc: "This is card-1",
  }, {
    id: 2,
    title: "card-2",
    desc: "This is card-2",
  }, {
    id: 3,
    title: "card-3",
    desc: "This is card-3",
  }, {
    id: 4,
    title: "card-4",
    desc: "This is card-4",
  }, {
    id: 5,
    title: "card-5",
    desc: "This is card-5",
  }, {
    id: 6,
    title: "card-6",
    desc: "This is card-6",
  }, {
    id: 7,
    title: "card-7",
    desc: "This is card-7",
  }, {
    id: 8,
    title: "card-8",
    desc: "This is card-8",
  }, {
    id: 9,
    title: "card-9",
    desc: "This is card-9",
  }, {
    id: 10,
    title: "card-10",
    desc: "This is card-10",
  }]
  return (
    <div className='row'>
      <div>
        {data.map((val, ind) => {
          return (
            <div class="card" style={{ width: "18rem" }} key={ind}>
              <img class="card-img-top" src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">{val.desc}</p>
                <Link to={`/${val.title}`} class="btn btn-primary">View</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Home;