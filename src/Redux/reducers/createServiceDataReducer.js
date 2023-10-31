import { createService} from "../actions/actionTypes";

const initialState = {};

export const createServiceDataReducer = (state = initialState, action) => {
    switch(action.type){
        case createService.SAVE_CREATE_SERVICE_DATA :
            return  action.payload
        case createService.REMOVE_CREATE_SERVICE_DATA:
            return action.payload
        default:
             return state    
    }
        
};