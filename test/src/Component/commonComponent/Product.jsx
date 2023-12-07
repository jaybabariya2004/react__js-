import { Link } from 'react-router-dom'
import { data } from './Data'
import { useState, useEffect } from 'react'

const Product = () => {
    const [product, setproduct] = useState(data);
    const [search, setSearch] = useState()

    const handleSearch = ((e) => {
        setproduct(product.filter((e) => e.availability !== false))
        const filter = data.filter((val) => val.Price <= parseInt(search))
        setproduct(filter)
    })
    return (
        <>
            <div className='row'>
                <div>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" name='price' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <input class="form-control mr-sm-2" type="range" min={500} max={70000} placeholder="Search" name='price' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleSearch} type="submit">Search</button>
                </div>
                <div className="row">
                    {product.map((val, ind) => {
                        return (
                            <div class="card" style={{ width: "18rem" }}>
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
            </div>
        </>
    )
}

export default Product