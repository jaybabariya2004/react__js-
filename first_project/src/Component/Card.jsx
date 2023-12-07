import React, {useState} from "react";
import { useEffect } from "react";
import Data from "./Data";

const Card = () => {
    console.log(Data,"data");
    
    const [Card, setCard] = useState([]);
    const [val, setval] = useState({});

    console.log(Card,"card");

    const handle = (e) => {
        setval({...val, [e.target.player]: e.target.number})
    };

    const handleSubmit = () => {
        setCard([...Card,val]);
    }

    useEffect(() => {
        setCard(Data);
    }, []);
    return (
        <div>
            <input type="text" name="player" onClick={handle}/>
            <input type="text" name="number" onClick={handle}/>
            <button onClick={handleSubmit}>+</button>
            <div>
                {Card?.map((val,ind) => {
                    return(
                        <>
                            <h1>{val.player}</h1> 
                            <h1>{val.number}</h1>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;