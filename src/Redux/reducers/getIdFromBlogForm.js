import { GetblogsId } from "../actions/actionTypes";

const initialState = {};

export const getblogIdFromForm = (state = initialState, action) => {
    switch(action.type){
        case GetblogsId.GET_FROM_FORM :
            return action.payload
        case GetblogsId.REMOVE_FROM_FORM :
            return action.payload
        default :
            return state
    }
        
};