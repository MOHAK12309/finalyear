import { getSellerDashboardCardsData } from "../actions/actionTypes";

const initialState = [];

export const SellerDashboardHostedData = (state = initialState, action) => {
    switch(action.type){
        case getSellerDashboardCardsData.GET_SELLER_HOSTED_SERVICES : 
            return action.payload
        case getSellerDashboardCardsData.REMOVE_SELLER_HOSTED_SERVICES : 
            return action.payload
        default : 
            return state
    }   
};

export const SellerDashboardDraftedData = (state = initialState, action) => {
    switch(action.type){
        case getSellerDashboardCardsData.GET_SELLER_DRAFTED_SERVICES : 
            return action.payload
        case getSellerDashboardCardsData.REMOVE_SELLER_DRAFTED_SERVICES : 
            return action.payload
        default : 
            return state
    }   
};
export const SellerDashboardOngoingOrderData = (state = initialState, action) => {
    switch(action.type){
        case getSellerDashboardCardsData.GET_SELLER_ONGOING_ORDERS : 
            return action.payload
        case getSellerDashboardCardsData.REMOVE_SELLER_ONGOING_ORDERS : 
            return action.payload
        default : 
            return state
    }   
};