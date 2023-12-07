import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <>
      {
        props.data.map((val, ind) => {
          return (
            <div className="row d-flex">
              <div className="card m-5" style={{ width: "18rem" }}>
                <img className="card-img-top" src="https://im.indiatimes.in/facebook/2019/Oct/rohit_sharma_1572353374.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-success">Success</button>
                </div>
                <div></div>
              </div>
            </div>
          )
        })

      }
      {/* } */}
    </>
  )
}

export default Card;