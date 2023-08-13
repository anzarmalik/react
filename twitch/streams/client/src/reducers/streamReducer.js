/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'

export default (state = {}, action) => {

    switch (action.type) {
        case 'FETCH_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'EDIT_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'FETCH_STREAMS':
            return { ...state, ..._.mapKeys(action.payload,'id') };
        case 'DELETE_STREAM':
            // return { ...state, [action.payload.id]: action.payload };
            return _.omit(state,action.payload);
        default:
            return state;
    }
}