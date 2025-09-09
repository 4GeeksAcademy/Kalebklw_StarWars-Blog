import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const VehicleDetails = () => {
    const {store, dispatch} =useGlobalReducer()
    const {id} = useParams()

    const [vehicleData, setVehicleData] = useState("")

    const getVehicleDetails = () => {
        fetch(store.baseUrl + `vehicles/${id}`)
        .then((resp) => resp.json())
        .then((data) =>{
            setVehicleData(data.result.properties)
            console.log("Vehicle Data Tag: ", data.result.properties)})
    }

    useEffect(
        () =>{
            getVehicleDetails()
        },[]
    )

    return(
        <div>

            <h1>{vehicleData.name}</h1>

            <Link to={"/"}>
                <button
                type="button"
                className="btn btn-primary">
                    Go Home
                </button>
            </Link>
        </div>
    )
};