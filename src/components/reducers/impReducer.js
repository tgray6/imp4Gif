import {TOGGLEFORM} from '../actions/actions';
import {ADD_POST} from '../actions/actions';

const initialState = {
	nickName: "Xer0",

	show: false,

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

// export const impReducer = (state=initialState, action) => {
// 	if(action.type === TOGGLEFORM) {
// 		return Object.assign({}, state, {
// 			show: true
// 		});
// 	}
// 	return state;
// }


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

	// switch(action.type) {
	// 	case 'ADD_POST':
	// 		return [...state.items, action.data]
	// 		// return state.concat([action.data])
	// 	default:
	// 	return state;
	// }
	return state;
}


	