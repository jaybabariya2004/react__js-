import React from 'react'
import { useState } from 'react'
import { data } from '../Card/Card'
import { Link } from 'react-router-dom'

function Dashbord() {

  const [product, setproduct] = useState(data)

  return (
    <div className='row'>
      {product.map((val, ind) => {
        return (
          <div class="card dashbord" style={{ width: "18rem" }}>
            <div class="card-body">
              <h3 class="card-title">{val.Course}</h3>
              <h5 class="card-text">{val.GRID}</h5>
              <h5 class="card-desc">{val.Fees}</h5>
              <h5 class="card-availibility">{val.courseEnd}</h5>
              <Link href="#" class="btn btn-dark btn-center">View</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Dashbord;
