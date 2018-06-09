import {TOGGLEFORM} from '../actions/actions';
import {ADD_POST} from '../actions/actions';
import {DELETE_POST} from '../actions/actions';
import {INDIVIDUAL_RENDER} from '../actions/actions';
import {LOGOUTUSER} from '../actions/actions';
// import {GOHOME} from '../actions/actions';
// import {ADD_COMMENT} from '../actions/actions';
import {FETCH_ITEMS_SUCCESS} from '../actions/actions';
import {LOGINUSER} from '../actions/actions';
import {LOADING} from '../actions/actions';
import {TOGGLEREGISTERFORM} from '../actions/actions';
import {TOGGLELOGINFORM} from '../actions/actions';
import {UPDATE_ITEM} from '../actions/actions';
// const uuidv1 = require('uuid/v1'); 

//using .sort on our ADD_POST
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
	nickName: "",

	show: false,
	showRegisterForm: false,
	showLoginForm: false,
	loading: false,

	itemToDisplay: null,

	items:[
		// {
		// 	id: uuidv1(),
		// 	title: "Id 0 post title",
		// 	type: "video",
		// 	url: "https://i.imgur.com/KtK8z0F.mp4",
		// 	author: "Xer0",
		// 	comments: [],
		// 	created: Date.now()
		// },
		// {
		// 	id: uuidv1(),
		// 	title: "Id 1 post title",
		// 	type:"image",
		// 	url: "https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp",
		// 	author: "Biggunz",
		// 	comments: [],
		// 	created: Date.now()
		// },
		// {
		// 	id: uuidv1(),
		// 	title: "Id 2 post title",
		// 	type:"youtube",
		// 	youtubeUrl: "https://www.youtube.com/embed/SN43u7up93I",
		// 	url: "https://www.youtube.com/watch?v=SN43u7up93I",
		// 	author: "Biggunz",
		// 	comments: [],
		// 	created: Date.now()			
		// },
		// {
		// 	id: uuidv1(),
		// 	title: "Id 3 post title",
		// 	type: "video",
		// 	url: "https://i.imgur.com/tJ7roYr.mp4",
		// 	author: "BakerMan",
		// 	comments: [],
		// 	created: Date.now()
		// },
		// {
		// 	id: uuidv1(),
		// 	title: "Id 4 post title",
		// 	type: "image",
		// 	url: "https://images5.alphacoders.com/444/thumb-1920-444701.jpg",
		// 	author: "FarrariMan",
		// 	comments: [],
		// 	created: Date.now()
		// }
	]
}


export function impReducer (state=initialState, action) {
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

	if(action.type === TOGGLEREGISTERFORM) {
		if(state.showRegisterForm===false){
			return Object.assign({}, state, {
				showRegisterForm: true
			});
		}
		else if(state.showRegisterForm===true){
			return Object.assign({}, state, {
				showRegisterForm: false
			});			
		}

	}

	if(action.type === TOGGLELOGINFORM) {
		if(state.showLoginForm===false){
			return Object.assign({}, state, {
				showLoginForm: true
			});
		}
		else if(state.showLoginForm===true){
			return Object.assign({}, state, {
				showLoginForm: false
			});			
		}

	}

	if(action.type === ADD_POST) {
		let items = [...state.items, action.data].sort(sortItems);
		// console.log(items);
		return Object.assign({}, state, {
			items,
			show: false
		});
	}

	if(action.type === DELETE_POST) {
		return Object.assign({}, state, {
			items: [...state.items.filter((post) => post.id !== action.id)],
			loading: true
		});
	}



	if(action.type === INDIVIDUAL_RENDER) {
		return Object.assign({}, state, {
			itemToDisplay: state.items.find((post) => post.id === action.id)
		});
	}



	if(action.type === LOADING) {
		if(state.loading===false){
			return Object.assign({}, state, {
				loading: true
			});
		}
		else if(state.loading===true){
			return Object.assign({}, state, {
				loading: false
			});			
		}
	}



	if(action.type === LOGOUTUSER) {
		return Object.assign({}, state, {
			nickName: null
		});
	}

	if(action.type === LOGINUSER) {
		return Object.assign({}, state, {
			nickName: "hardcodednickName"
		});
	}

	// if(action.type === GOHOME) {
	// 	return Object.assign({}, state, {
	// 		itemToDisplay : null
	// 	});
	// }

	// if(action.type === ADD_COMMENT) {
	// 	//NEVER push to an array like I was trying to do initially. We need to copy the array, add something to it, then update the original array.
	// 	let currentItem = state.items.find((post) => post.id === action.id);
	// 	//let comments takes our comments array in itemToDisplay.comments, and adds our new comment on commentform submit with the action.comment.
	// 	let comments = [...currentItem.comments, action.comment]
	// 	//let itemToDisplay sets our state to our itemToDisplay state, and adds our new comments array.
	// 	let itemToDisplay = Object.assign({}, currentItem, {comments})

	// 	//NOW, we need to update our items array as well, because this is what holds our array information. so, let items = state.items.map, takes the item parameter, checks the specific item.id and checks if it is equal to itemToDisplay.id, if so, itemToDisplay is set to item, which updates our state.items
	// 	let items = state.items.map(item => item.id === itemToDisplay.id? itemToDisplay: item)

	// 	return Object.assign({}, state, {
	// 		itemToDisplay, items
	// 	});
	// }



	//THIS IS USED NOW INSTEAD OF ADD_COMMENT BECAUSE WE ARE RETURNING A WHOLE NEW ITEM OBJECT WHEN WE USE PUT ON THE SERVER. SO, WE JUST UPDATE OUR ITEM WITH action.item, which will be updateItem(response), the response from our server. Remember, the server is doing what we had to manually do with ADD_COMMENT, its returning an updated object after we fetch our PUT.
	//This is taking our items, mapping them to the item parameter, then if action.item.id EQUALS the item id in the state, then set our action.item to be our newest updated Item in the state.
	if(action.type === UPDATE_ITEM) {
		return Object.assign({}, state, {
			items: state.items.map(item => action.item.id === item.id? action.item: item)
		});
	}

	else if (action.type === FETCH_ITEMS_SUCCESS) {
        return Object.assign({}, state, {
        	items: action.items
        });
    }

	return state;
}


	