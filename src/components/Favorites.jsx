import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {
    const {store, dispatch} =useGlobalReducer()

    return(
        <div>
            <div className="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    {store.favorites.map((favorites) => {
                        return(
                            <div>
                                <li><a className="dropdown-item">{favorites}</a></li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};