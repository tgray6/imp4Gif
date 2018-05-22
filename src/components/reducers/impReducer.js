import {TOGGLEFORM} from '../actions/actions';
import {ADD_POST} from '../actions/actions';
import {DELETE_POST} from '../actions/actions';
import {INDIVIDUAL_RENDER} from '../actions/actions';
import {LOGOUTUSER} from '../actions/actions';
import {GOHOME} from '../actions/actions';

const initialState = {
	nickName: "Xer0",

	show: false,

	itemToDisplay: null,

	items:[
		{
			id: new Date(),
			title: "Id 0 post title",
			type: "video",
			url: "https://i.imgur.com/KtK8z0F.mp4",
			comments: "Nice Post"
		},
		{
			id: new Date(),
			title: "Id 1 post title",
			type:"image",
			url: "https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp",
			comments: "Good Post"
		},
		{
			id: new Date(),
			title: "Id 2 post title",
			type: "video",
			url: "https://i.imgur.com/tJ7roYr.mp4",
			comments: "Great Post"
		},
		{
			id: new Date(),
			title: "Id 3 post title",
			type: "image",
			url: "https://images5.alphacoders.com/444/thumb-1920-444701.jpg",
			comments: "Best Post"
		}
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

	if(action.type === GOHOME) {
		return Object.assign({}, state, {
			itemToDisplay : null
		});
	}

	return state;
}


	