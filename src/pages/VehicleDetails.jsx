import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {vehicleImages} from "../assets/img/VehicleImages.js";

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
        <div className="container">

            <div className="d-flex justify-content-center">
                <div className="row col-8">
                    <img className="detailedImage" src={vehicleImages[vehicleData.name]}></img>
                </div>

                <div className="vehicleName row col">
                    <h1>{vehicleData.name}</h1>
                </div>
            </div>
            
            <div className="bottomContainer d-flex justify-content-center">
                <div className="informationEdit row col">
                    <h3>Cost:</h3>
                    <div>{vehicleData.cost_in_credits}</div>
                </div>

                <div className="informationEdit row col">
                    <h3>Manufacturer:</h3>
                    <div>{vehicleData.manufacturer}</div>
                </div>

                <div className="row col">
                    <h3>Specs:</h3>
                    <div>Max Capacity: {vehicleData.cargo_capacity}</div>
                    <div>Max Passengers: {vehicleData.passengers}</div>
                    <div>Top Speed: {vehicleData.max_atmosphering_speed}</div>
                    <div>Max Crew: {vehicleData.crew}</div>
                    <div>Length of Vehicle: {vehicleData.length}</div>
                    <div>Model: {vehicleData.model}</div>
                    <div>Class: {vehicleData.vehicle_class}</div>
                </div>
            </div>


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