import { serviceCard } from "../actions/actionTypes";

const initialState = [];

export const AllHostedServiceData = (state = initialState, action) => {
    switch(action.type){
        case serviceCard.SAVE_ALL_HOSTED_SERVICE_DATA : 
            return action.payload
        default : 
            return state
    }   
};