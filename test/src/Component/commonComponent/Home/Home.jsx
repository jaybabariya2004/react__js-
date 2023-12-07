import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Data'
import { useState } from 'react'

function Home() {

    const [product, setproduct] = useState(data)

    useEffect(() => {

        setproduct(product.filter((e)=> e.availability !== false))
    })
    return (
        <div className='row'>
            {product.map((val,ind) => {
                return(
                    <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h3 class="card-title">{val.ProductName}</h3>
                        <h5 class="card-text">{val.Price}</h5>
                        <h5 class="card-desc">{val.desc}</h5>
                        <h5 class="card-availibility">{val.availability}</h5>
                        <Link href="#" class="btn btn-primary">View</Link>
                    </div>
            </div>
                );
            })}
        </div>
    )
}

export default Home