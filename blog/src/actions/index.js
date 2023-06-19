import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('https://jsonplaceholder.typicode.com/posts')
    return dispatch({
        type: "FETCH_POSTS",
        payload: response.data,
    });
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return dispatch({
        type: "FETCH_USER",
        payload: response.data,
    });
}
