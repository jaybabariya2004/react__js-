import React, { useState } from "react";

function Form() {

    const [value, setvalue] = useState({});

    const handle = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value)
    }

    return (
        <>
            <div>
                <h1>{ }</h1>
                <div>
                    <label>First name : </label>
                    <input type="text" name="fname" onChange={handle} /><br />
                    <label>Last name : </label>
                    <input type="text" name="lname" onChange={handle} /><br />
                    <label>Password : </label>
                    <input type="number" name="password" onChange={handle} /><br />
                    <label>E-mail : </label>
                    <input type="text" name="E-mail" onChange={handle} /><br />
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Form;