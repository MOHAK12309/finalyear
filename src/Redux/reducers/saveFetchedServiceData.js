import { serviceCard } from "../actions/actionTypes";

const initialState = [];

export const saveFetchedServiceData = (state = initialState, action) => {
    switch(action.type){
        case serviceCard.SAVE_FETCHED_SERVICE_DATA : 
            return action.payload
        case serviceCard.REMOVE_FETCHED_SERVICE_DATA :
            return action.payload
        default : 
            return state
    }   
};