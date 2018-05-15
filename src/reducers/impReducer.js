

const initialState = {
	nickName: "Xer0",

	videos: [
		"https://i.imgur.com/KtK8z0F.mp4",
		"https://i.imgur.com/tJ7roYr.mp4"
	],

	images: [
		"https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp",
		// "https://i.imgur.com/aFU9kHz.jpg"
	],

	title: "State Test Title",

	image: "https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp",

	comments: [
		"Nice Post"
	]
}

export const impReducer = (state=initialState, action) => {
	return state;
}