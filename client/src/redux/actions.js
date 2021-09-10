export const GET_CITIES = 'GET_CITIES';

//Recibe la data importada en App.js y se va para el reducer
export function getCities() {
    return function(dispatch) {
        return fetch("http://localhost:3001/cities")
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_CITIES, payload: json });
          });
      };
}