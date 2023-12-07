import React from "react";

const Atoms = () => {
    return (
        <>
            <div className="row d-flex border-black border-2 m-5">
                <div className="card m-5" style={{ width: "18rem" }}>
                    
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <button type="button" style={{color:"white", backgroundColor:"blue", borderRadius:"5px", padding:"3px"}}>Success</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Atoms;