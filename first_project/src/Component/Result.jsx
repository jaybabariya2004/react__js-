import React from 'react'
import { useParams } from 'react-router-dom';

const Result = () => {

    const {id} = useParams();

    console.log(id,"res");

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
      },{
        id: 4,
        title: "card-4",
        desc: "This is card-4",
      },{
        id: 5,
        title: "card-5",
        desc: "This is card-5",
      },{
        id: 6,
        title: "card-6",
        desc: "This is card-6",
      },{
        id: 7,
        title: "card-7",
        desc: "This is card-7",
      },{
        id: 8,
        title: "card-8",
        desc: "This is card-8",
      },{
        id: 9,
        title: "card-9",
        desc: "This is card-9",
      },{
        id: 10,
        title: "card-10",
        desc: "This is card-10",
      }]

      const res = data.filter((e) => e.title == id);
      console.log(res,"res");

      return(
        <div>
            <div>
                <h1>{res[0].title}</h1>
                <h1>{res[0].desc}</h1>
            </div>
        </div>
      )
}

export default Result;