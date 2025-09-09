import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const CharacterDetails = () => {
    const {store, dispatch} =useGlobalReducer()
    const {id} = useParams()
    const [characterData, setcharacterData] = useState("")

    const getCharacterDetails = () =>{
        fetch(store.baseUrl + `people/${id}`)
        .then((resp) => resp.json())
        .then((data) =>{
            setcharacterData(data.result.properties)
            console.log("Character Data Tag: ", data)
        }
        )
    }

    useEffect(
        () => {
            getCharacterDetails()
        }, []
    )

    return(
        <div>
            <div className="d-flex justify-content-center">
                <h1>{characterData.name}</h1>    
            </div>

            <div className="d-flex justify-content-center">
                {characterData.created}
            </div>    
                
            <div>
                {characterData.birth_year}
            </div>
                
            <div>
                {characterData.homeworld}  
            </div>

            <div></div>


            <Link to="/">
                <button 
                type="button" 
                className="btn btn-primary">
                    Home
                </button>
            </Link>                
        </div>

    )
};