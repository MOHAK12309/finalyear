import { getSellerId } from "../actions/actionTypes";

const initialState = {};

export const getSellerIdFromAuthentication = (state = initialState, action) => {
    switch(action.type){
        case getSellerId.GET_SELLER_ID_FROM_AUTH :
            return action.payload
        case getSellerId.REMOVE__SELLER_ID_FROM_AUTH :
            return action.payload
        default :
            return state
    }
        
};