import {TOGGLEFORM} from '../actions/actions';
import {ADD_POST} from '../actions/actions';
import {DELETE_POST} from '../actions/actions';
import {INDIVIDUAL_RENDER} from '../actions/actions';
import {LOGOUTUSER} from '../actions/actions';
import {GOHOME} from '../actions/actions';
import {ADD_COMMENT} from '../actions/actions';
import {FETCH_ITEMS_SUCCESS} from '../actions/actions';
import {LOGINUSER} from '../actions/actions';

const uuidv1 = require('uuid/v1');
const initialState = {
	nickName: "",

	show: false,

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

	if(action.type === ADD_POST) {
		return Object.assign({}, state, {
			items: [...state.items, action.data]
		});
	}

	if(action.type === DELETE_POST) {
		return Object.assign({}, state, {
			items: [...state.items.filter((post) => post.id !== action.id)],
			itemToDisplay: null
		});
	}

	if(action.type === INDIVIDUAL_RENDER) {
		return Object.assign({}, state, {
			itemToDisplay: state.items.find((post) => post.id === action.id)
		});
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

	if(action.type === GOHOME) {
		return Object.assign({}, state, {
			itemToDisplay : null
		});
	}

	if(action.type === ADD_COMMENT) {
		//NEVER push to an array like I was trying to do initially. We need to copy the array, add something to it, then update the original array.
		let currentItem = state.items.find((post) => post.id === action.id);
		//let comments takes our comments array in itemToDisplay.comments, and adds our new comment on commentform submit with the action.comment.
		let comments = [...currentItem.comments, action.comment]
		//let itemToDisplay sets our state to our itemToDisplay state, and adds our new comments array.
		let itemToDisplay = Object.assign({}, currentItem, {comments})

		//NOW, we need to update our items array as well, because this is what holds our array information. so, let items = state.items.map, takes the item parameter, checks the specific item.id and checks if it is equal to itemToDisplay.id, if so, itemToDisplay is set to item, which updates our state.items
		let items = state.items.map(item => item.id == itemToDisplay.id? itemToDisplay: item)

		return Object.assign({}, state, {
			itemToDisplay, items
		});
	}

	else if (action.type === FETCH_ITEMS_SUCCESS) {
        return Object.assign({}, state, action.items);
    }

	return state;
}


	