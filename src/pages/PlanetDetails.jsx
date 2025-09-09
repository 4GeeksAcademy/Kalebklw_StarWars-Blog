import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const PlanetDetails = () => {
    const {store, dispatch} =useGlobalReducer()
    const {id} = useParams()
    const [planetData, setplanetData] = useState("")


    const getPlanetDetails = () => {
        fetch(store.baseUrl + `planets/${id}`)
        .then((resp) => resp.json())
        .then((data) => setplanetData(data.result.properties))
    };

    useEffect (
        () => {
            getPlanetDetails()
        },[]
    );

    return(
        <div>
            
            <div>
                <h1>{planetData.created}</h1>
            </div>



            <Link to={"/"}>
                <button
                type="button"
                className="btn btn-primary"
                >
                    Go Home
                </button>
            </Link>
        </div>
    )
};