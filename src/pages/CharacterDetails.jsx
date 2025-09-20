import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characterImages } from "../assets/img/ChaImages.js";


export const CharacterDetails = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [characterData, setcharacterData] = useState("")

    const getCharacterDetails = () => {
        fetch(store.baseUrl + `people/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
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

    return (
        <div className="container">

            <div className="d-flex justify-content-center">
                <div className="row col-8">
                    <img className="detailedImage" src={characterImages[characterData.name]}></img>
                </div>

                <div className="charName row col">
                    <h1>{characterData.name}</h1>
                    <p>A character within the StarWars universe</p>
                </div>
            </div>

            <div className="bottomContainer d-flex justify-content-center">
                <div className="row col">
                    <div>
                        <h3>Gender:</h3>
                        {characterData.gender}
                    </div>
                </div>

                <div className="row col">
                    <h3>Physical Attributes: </h3>
                    <div>
                        <div>Skin Color: {characterData.skin_color}</div>
                        <div>Hair Color: {characterData.hair_color}</div>
                        <div>Eye Color: {characterData.eye_color}</div>
                        <div> Height: {characterData.height}cm</div>
                    </div>
                </div>

                <div className="birth row col">
                    <h3>Birth Year:</h3>
                    <div>
                        {characterData.birth_year}
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-start">
                <Link to="/">
                    <button
                        type="button"
                        className="btn btn-primary">
                        Home
                    </button>
                </Link>
            </div>
        </div>

    )
};