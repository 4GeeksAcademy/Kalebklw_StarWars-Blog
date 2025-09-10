import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { planetImages } from "../assets/img/PlanetImages.js";

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
        <div className="container">
            
            <div className="d-flex justify-content-center">
                <div className="row col-8">
                    <img src={planetImages[PlanetDetails.name]}></img>
                </div>

                <div className="planetName">
                    <h1>{planetData.name}</h1>
                </div>
            </div>

            <div className="bottomContainer d-flex justify-content-center">
                <div className="row col">
                    <div>
                        <h3>Population:</h3>
                        {planetData.population}
                    </div>
                </div>

                <div className="row col">
                    <h3>Attributes:</h3>
                    <div>Diameter: {planetData.diameter}</div>                  
                    <div>Climate: {planetData.climate}</div>
                    <div>Terrain: {planetData.terrain}</div>
                </div>

                <div className="row col">
                    <h3>Miscellaneous Stats:</h3>
                    <div>Orbital Period: {planetData.orbital_period}</div>
                    <div>Rotation Period: {planetData.rotation_period}</div>
                    <div>Gravitational Pull: {planetData.gravity}</div>
                </div>
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