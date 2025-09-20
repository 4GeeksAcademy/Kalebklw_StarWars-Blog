export const initialStore=()=>{
  return{
   baseUrl: "https://www.swapi.tech/api/",
   characters: [],
   planets: [],
   vehicles: [],
   charDetails: [],
   favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set-characters':

      return {
        ...store,
        characters: action.payload
      };

    case 'set-planets':
      return{
        ...store,
        planets: action.payload
      };

      case 'set-vehicles':
        return{
          ...store,
          vehicles: action.payload
        };

        case 'set-details' :
          return{
            ...store,
            charDetails: action.payload
          };
      
    case 'set-favorites':
      if (store.favorites.some(fav => fav === action.payload)) {
        const newFavorites = store.favorites.filter((favorite) => favorite !== action.payload)
        return {...store,
          favorites: newFavorites
        };
      }
      return{
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    default:
      throw Error('Unknown action.');
  }    
}