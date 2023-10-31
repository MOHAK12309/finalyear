import { GetblogsId } from "../actions/actionTypes";

const initialState = {};

export const getBlogid = (state = initialState, action) => {
    switch(action.type){
        case GetblogsId.GET_ID_BLOGS :
            return  action.payload
        case GetblogsId.REMOVE_ID_BLOGS:
        return  action.payload
        default:
             return state 
        
    }
        
};