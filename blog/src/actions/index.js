import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
    return dispatch({
        type: "FETCH_POSTS",
        payload: await jsonPlaceHolder.get('/posts')
    });
}
