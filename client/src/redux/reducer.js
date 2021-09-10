import { GET_CITIES } from './actions';

const initialState = {
    cities: [],
}


//Mi estado inicial es un array vacío. Ahora se va a llenar con la data dispachada
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_CITIES:
            return {
                cities: action.payload
            }
        default:
            return state;
    }
}