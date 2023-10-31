import { serviceCard } from "../actions/actionTypes";

const initialState = {};

export const getServiceIDfromSellerDashboard = (state = initialState, action) => {
    switch(action.type){
        case serviceCard.GET_SERVICE_CARD_ID_FOR_FROM_SELLER_DASHBOARD:
            return action.payload
        case serviceCard.REMOVE_SERVICE_CARD_ID_FOR_FROM_SELLER_DASHBOARD :
            return action.payload
        default :
            return state
    }
        
};