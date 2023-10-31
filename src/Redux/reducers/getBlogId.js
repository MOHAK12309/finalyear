import { Getblogs } from "../actions/actionTypes";

const initialState = {};

export const getBlogid = (state = initialState, action) => {
    switch(action.type){
        case Getblogs.GET_ALL_BLOGS :
            return  action.payload
      
        default:
             return state 
        
    }
        
};