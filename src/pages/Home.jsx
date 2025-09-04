import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'



export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [characters, setCharacters] = useState()
  const [planets, setPlanets] = useState()

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
	}

	useEffect(() => {
		getCharacters()
		
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
			

		</div>
	);
}; 