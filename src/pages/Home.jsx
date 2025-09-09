import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'



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
									<img src="..." class="card-img-top" alt="..." />
									<div class="card-body">
										<h5 class="card-title">{characters.name}</h5>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										
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

								<p className="mb-0">{planets.name}</p>

								<Link to= {"/planetdetails/"+ planets.uid}>
									<button 
									type="button" 
									className="btn btn-primary mt-2 mb-3">
										click for details
									</button>
								</Link>
								<button 
								type="button" 
								className="btn btn-primary" 
								onClick={() => {dispatch ({type:'set-favorites', payload: planets.name})}}
								>
									Favorite
								</button>
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

								<p className="mb-0">{vehicles.name}</p>

								<Link to= {"/vehicledetails/"+ vehicles.uid}>
									<button 
									type="button" 
									className="btn btn-primary mt-2 mb-3">
										click for details
									</button>
								</Link>
								<button 
								type="button" 
								className="btn btn-primary" 
								onClick={() => {dispatch ({type:'set-vehicles', payload: vehicles.name})}}
								>
									Favorite
								</button>
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