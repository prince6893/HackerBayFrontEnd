// default reducer
// Note: You can remove this reducer and create your own reducer

//import { FETCH_DATA } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case "name":
            return action.payload;
        default:
            return state;
    }
}