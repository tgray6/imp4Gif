import {
    FETCH_DATA_REQUEST,
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ADD_POST,
    TOGGLEFORM,
    UPDATE_ITEM,
    TOGGLEMODAL,
    TOGGLEMODALOFF
} from '../actions/protected';


//Used to sort our array of data so the newest shows up at the start of the array on the client(top left most post).
function sortItems(a, b) {

  let d1 = new Date(a.created);
  let d2 = new Date(b.created); 

  if (d1 > d2) {
    return -1;
  }

  if (d1 < d2) {
    return 1;
  }

  return 0;
}


const initialState = {
    data: [],
    ready: true,
    error: null,
    show: false,
    modalShow: false,
    loginLoad: false
};


//Check notes on protected.js to understand what the reducer actions are doing.
export function protectedReducer(state = initialState, action) {
    //show and hide post form
    if(action.type === TOGGLEFORM) {
        if(state.show===false){
            return Object.assign({}, state, {
                show: true
            });
        }
        else if(state.show===true){
            return Object.assign({}, state, {
                show: false
            });         
        }

    }

    //UPDATING EACH POST SO COMPONENT RENDERS CLIENT_SIDE
    if(action.type === ADD_POST) {
        let items = [...state.data, action.data].sort(sortItems);
        return Object.assign({}, state, {
            data: items,
            show: false,
            modalShow: false
        });
    }

    //set link instructions guide to off on postform
    if(action.type === TOGGLEMODALOFF) {
        return Object.assign({}, state, {
            modalShow: false
        });
    }

    //toggles link instructions guide visibility
    if(action.type === TOGGLEMODAL) {
        if(state.modalShow===false){
            return Object.assign({}, state, {
                modalShow: true
            });
        }
        else if(state.modalShow===true){
            return Object.assign({}, state, {
                modalShow: false
            });         
        }

    }

    //UPDATE_ITEM is taking our items, mapping them to the item parameter, then if action.item.id EQUALS the item id in the state, then set our action.item to be our newest updated Item in the state. This is to ensure our comment is rendered when users submit the comment form.
    if(action.type === UPDATE_ITEM) {
        return Object.assign({}, state, {
            data: state.data.map(item => action.item.id === item.id? action.item: item)
        });
    }


    if (action.type === FETCH_DATA_REQUEST) {
        return Object.assign({}, state, {
            loginLoad: true
        });
    }


    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            loginLoad: false,
            error: null,
            ready: false
        });
    } 


    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            loginLoad: false,
            error: action.error,
            ready: false
        });
    }
    return state;
}