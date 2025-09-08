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
			<div className="my-5 characterContainer d-flex">
				{store.characters.length > 0 ?
				store.characters.map(
					(characters) => {
						return(
							<div>

								<p className="mb-0">{characters.name}</p>

								<Link to= {"/detail/"+ characters.uid}>
									<button 
									type="button" 
									className="btn btn-primary mt-2 mb-3">
										click for details
									</button>
								</Link>
								<button 
								type="button" 
								className="btn btn-primary" 
								onClick={() => {dispatch ({type:'set-favorites', payload: characters.name})}}
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

			<div className="my-5 planetContainer d-flex">
				{store.planets.length > 0 ?
				store.planets.map(
					(planets) => {
						return(
							<div>

								<p className="mb-0">{planets.name}</p>

								<Link to= {"/detail/"+ planets.uid}>
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
			
			<div className="my-5 vehiclesContainer d-flex">
				{store.vehicles.length > 0 ?
				store.vehicles.map(
					(vehicles) => {
						return(
							<div>

								<p className="mb-0">{vehicles.name}</p>

								<Link to= {"/detail/"+ vehicles.uid}>
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