import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Detail = () => {
    const {store, dispatch} =useGlobalReducer()
    const {id} = useParams()

    const getCharacterDetails = () =>{
        fetch(store.baseUrl + "people/" + id)
        .then((resp) => resp.json())
        .then((data) => console.log("Luke Details Tag: ", data))
    }
    useEffect(
        () => {
            getCharacterDetails()
        }, []
    )

    return(
        <div>detail
            <Link to="/">
                <button 
                type="button" 
                className="btn btn-primary">
                    Home
                </button>
            </Link>
            {id}
        </div>

    )
};