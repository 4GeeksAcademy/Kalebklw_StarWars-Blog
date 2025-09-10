import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { characterImages } from "../assets/img/ChaImages.js";
import { planetImages } from "../assets/img/PlanetImages.js";
import './home.css'
import { vehicleImages } from "../assets/img/VehicleImages.js";



export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [characters, setCharacters] = useState()
  const [planets, setPlanets] = useState()
  const [vehicles, setVehicles] = useState()

	const getCharacters = () => {
		fetch(store.baseUrl + "people")
		.then((resp) => {
			return resp.json()
		})
		.then((data) => {
			dispatch ({
				type: "set-characters",
				payload: data.results
			})
			console.log("Character Data Tag: ", data)
		})
	};

	const getPlanets = () => {
		fetch(store.baseUrl + "planets")
		.then((resp) => {
			return resp.json()
		})
		.then((data) => {
			dispatch ({
				type: "set-planets",
				payload: data.results
			})
		})
	};

	const getVehicles = () => {
		fetch(store.baseUrl + "vehicles")
		.then((resp) => {
			return resp.json()
		})
		.then((data) => {
			dispatch ({
				type: "set-vehicles",
				payload: data.results
			})
		})
	};

	useEffect(() => {
		getCharacters()
		getPlanets()
		getVehicles()
	}, []

	)
	
	return (
		<div className="text-center mt-5">

			<h1>In A Galaxy Far Far Away...</h1>
			
			{/* Code For Characters */}
			<div className="my-5 characterContainer d-flex">
				{store.characters.length > 0 ?
				store.characters.map(
					(characters) => {
						return(
							<div>
								<div className = "cardFoundation card">
									<img src={characterImages[characters.name]} class="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">{characters.name}</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										
										<div>
											<Link to= {"/characterdetails/"+ characters.uid}>
												<button 
												type="button" 
												className="btn btn-primary mt-2 mb-3">
													click for details
												</button>
											</Link>
										</div>

										<div>
											<button 
											type="button" 
											className="btn btn-primary" 
											onClick={() => {dispatch ({type:'set-favorites', payload: characters.name})}}
											>
												Favorite
											</button>
										</div>
									</div>
								</div>
							</div>
						)
					}
				)
			: "Loading..."
			}
			</div>

			{/* Code For Planets */}
			<div className="my-5 planetContainer d-flex">
				{store.planets.length > 0 ?
				store.planets.map(
					(planets) => {
						return(
							<div>
								<div className="cardFoundation card">
									<img src={planetImages[planets.name]} class="card-img-top" />

									<div>
										<h5 className="card-title">{planets.name}</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<div>
											<Link to= {"/planetdetails/"+ planets.uid}>
												<button 
												type="button" 
												className="btn btn-primary mt-2 mb-3">
													click for details
												</button>
											</Link>
										</div>
									
										<div>
											<button 
											type="button" 
											className="btn btn-primary mb-3" 
											onClick={() => {dispatch ({type:'set-favorites', payload: planets.name})}}
											>
												Favorite
											</button>
										</div>
									</div>
								</div>	
							</div>
						)
					}
				)
			: "Loading..."
			}
			</div>

			{/* Code For Vehicles */}
			<div className="my-5 vehiclesContainer d-flex">
				{store.vehicles.length > 0 ?
				store.vehicles.map(
					(vehicles) => {
						return(
							<div>
								<div className="cardFoundation card">
									<img src={vehicleImages[vehicles.name]} class="card-img-top" alt="..." />
									<div>
										<h5 className="card-title">{vehicles.name}</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
									
										<div>
											<Link to= {"/vehicledetails/"+ vehicles.uid}>
												<button 
												type="button" 
												className="btn btn-primary mt-2 mb-3">
													click for details
												</button>
											</Link>
										</div>
									
										<div>
											<button 
											type="button" 
											className="btn btn-primary mb-3" 
											onClick={() => {dispatch ({type:'set-vehicles', payload: vehicles.name})}}
											>
												Favorite
											</button>
										</div>
									</div>
								</div>	
							</div>
						)
					}
				)
			: "Loading..."
			}
			</div>

		</div>
	);
}; 