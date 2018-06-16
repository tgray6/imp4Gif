import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ADD_POST,
    TOGGLEFORM,
    UPDATE_ITEM
} from '../actions/protected';

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
    // itemToDisplay: null,
    error: null,
    show: false
};

export function protectedReducer(state = initialState, action) {

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


    //UPDATING EACH POST SO COMPONENT RE-RENDERS CLIENT_SIDE
    if(action.type === ADD_POST) {
        let items = [...state.data, action.data].sort(sortItems);
        // console.log(data);
        return Object.assign({}, state, {
            data: items,
            show: false
        });
    }


    //THIS IS USED NOW INSTEAD OF ADD_COMMENT BECAUSE WE ARE RETURNING A WHOLE NEW ITEM OBJECT WHEN WE USE PUT ON THE SERVER. SO, WE JUST UPDATE OUR ITEM WITH action.item, which will be updateItem(response), the response from our server. Remember, the server is doing what we had to manually do with ADD_COMMENT, its returning an updated object after we fetch our PUT.
    //This is taking our items, mapping them to the item parameter, then if action.item.id EQUALS the item id in the state, then set our action.item to be our newest updated Item in the state.
    if(action.type === UPDATE_ITEM) {
        return Object.assign({}, state, {
            data: state.data.map(item => action.item.id === item.id? action.item: item)
        });
    }



    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } 


    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}