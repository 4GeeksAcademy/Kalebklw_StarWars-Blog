import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {
    const {store, dispatch} =useGlobalReducer()

    return(
        <div>
            <div className="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">
                    {store.favorites.map((favorites, index) => {
                        console.log("DEBUG FAVORITES TAG: ", favorites)
                        return(
                                <li key={index}><a className="dropdown-item">{favorites}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};