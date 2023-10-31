import { getSellerId } from "../actions/actionTypes";

const initialState = {};

export const getSellerIdForProfileView = (state = initialState, action) => {
    switch(action.type){
        case getSellerId.GET_SELLER_ID_FROM_BUY_SERVICE :
            return  action.payload
        case getSellerId.GET_SELLER_ID_FROM_SELLER_CARD :
            return action.payload
        case getSellerId.REMOVE_SELLER_ID_FROM_BUY_SERVICE :
            return action.payload
        case getSellerId.REMOVE_SELLER_ID_FROM_SELLER_CARD:
            return action.payload
        default:
             return state 
        
    }
        
};