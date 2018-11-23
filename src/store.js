import createStore from "redux-zero";

const initialState = {
	preview: {},
	gallery: {
		images: [
			{
			image: 'https://giantessbooru.com/_images/956497e44c5e516948d1eb63f367e76b/239906.jpg',
			alt: ''
			},
			{
			image: 'https://giantessbooru.com/_images/f80cc63a73f4c59a08ffb243ff29cc76/239975.png',
			alt: 'wow'
			},
			{
			image: 'https://giantessbooru.com/_images/bd2ce2ef4e74aa3346a74d55a639c29e/239671.jpg',
			alt: 'wow'
			}
		],
	},
};

export default createStore(initialState);
