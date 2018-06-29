import {protectedReducer} from '../reducers/protectedReducer';
import {
	fetchProtectedDataSuccess,
	fetchProtectedDataError,
	addPost,
	togglePostForm,
	updateItem,
	toggleModal,
	toggleModalOff,
	fetchProtectedData

} from '../actions/protected';

describe('protectedReducer', () => {
	const initialState = {
    	data: [],
    	ready: true,
    	error: null,
   		show: false,
   		modalShow: false
	};

	it('Should recognize the initialState as the set values', () => {
		const state = initialState;
		expect(state).toEqual(state);
	})

	describe('toggleModalOff', () => {
		it('Should toggle "modalShow" to false', () => {
			let state = {
				modalShow: true
			}
			state = protectedReducer(state, toggleModalOff());
			expect(state).toEqual({
				modalShow: false
			});
		})
	})

	describe('toggleModal', () => {
		it('Should toggle "modalShow" to false', () => {
			let state = {
				modalShow: true
			}
			state = protectedReducer(state, toggleModal());
			expect(state).toEqual({
				modalShow: false
			});
		})
	})

	describe('toggleModal', () => {
		it('Should toggle "modalShow" to true', () => {
			let state = {
				modalShow: false
			}
			state = protectedReducer(state, toggleModal());
			expect(state).toEqual({
				modalShow: true
			});
		})
	})

	describe('togglePostForm', () => {
		it('Should toggle "show" to true', () => {
			let state = {
				show: false
			}
			state = protectedReducer(state, togglePostForm());
			expect(state).toEqual({
				show: true
			});
		})
	})

	describe('togglePostForm', () => {
		it('Should toggle "show" to false', () => {
			let state = {
				show: true
			}
			state = protectedReducer(state, togglePostForm());
			expect(state).toEqual({
				show: false
			});
		})
	})

	describe('addPost', () => {
    	it('Should add a new post do the data array and toggle show and modalshow to false', () => {
         	let state = {
     			data: [],
     			show: true,
           		modalShow: true
          	}
 
 			let item = {
 				title: "Test Title",
 				type: "image",
 				youTubeUrl: "https://i.gifer.com/NM9x.gif",
 				url: "https://i.gifer.com/NM9x.gif",
 				author: "New Author",
 				comments: []
 			}

        	state = protectedReducer(state, addPost(item))
       		expect(state.data).toEqual([item])
       		expect(state.show).toEqual(false)
       		expect(state.modalShow).toEqual(false)
    	});
	});

	describe('updateItem', () => {
		it('Should update our comments array with new comment', () => {
			let state = {
				data: [
				{
					id: "5b29855bbce1df22f068cb81",
					title: "Test Title",
 					type: "image",
 					youTubeUrl: "https://i.gifer.com/NM9x.gif",
 					url: "https://i.gifer.com/NM9x.gif",
 					author: "New Author",
 					comments: []
				}
				]
			}

			let updatedItem = {
					id: "5b29855bbce1df22f068cb81",
					title: "Test Title",
 					type: "image",
 					youTubeUrl: "https://i.gifer.com/NM9x.gif",
 					url: "https://i.gifer.com/NM9x.gif",
 					author: "New Author",
 					comments: ["New Comment"]
				};

			state = protectedReducer(state, updateItem(updatedItem))
			expect(state.data).toEqual([updatedItem])
		})
	})

	describe('fetchProtectedDataSuccess', () => {
		it('Should show data, set "error" to null, and "ready" to false', () =>{
			let state = {
				data: [
				{
					id: "5b29855bbce1df22f068cb81",
					title: "Test Title",
 					type: "image",
 					youTubeUrl: "https://i.gifer.com/NM9x.gif",
 					url: "https://i.gifer.com/NM9x.gif",
 					author: "New Author",
 					comments: []
				}
				],
				error: "Unauthorized",
            	ready: true
			}

			state = protectedReducer(state, fetchProtectedDataSuccess(state))
			expect(state).toEqual(state);
			expect(state.error).toEqual(null);
			expect(state.ready).toEqual(false)
		})
	})
})