import { serviceCard } from "../actions/actionTypes";

const initialState = {};

export const navigationServiceData = (state = initialState, action) => {
    switch (action.type) {
        case serviceCard.SAVE_NAVIGATION_DATA :
            return  action.payload
        case serviceCard.REMOVE_NAVIGATION_DATA:
            return action.payload
        default:
            return state
    }        
};