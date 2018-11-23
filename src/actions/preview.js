
export const setPreviewImage = (state, image) => ({ preview: { ...state.preview, image, show: true} });
export const hidePreviewImage = state => ({ preview: {...state.preview, show: false}});
