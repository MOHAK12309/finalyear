import { getAllSellers } from "../actions/actionTypes";

const initialState = [];

export const getSellerCards = (state = initialState, action) => {
    switch(action.type){
        case getAllSellers.GET_ALL_SELLER_CARDS : 
            return action.payload
        case getAllSellers.REMOVE_ALL_SELLER_CARDS : 
            return action.payload
        default :
            return state
    }
}