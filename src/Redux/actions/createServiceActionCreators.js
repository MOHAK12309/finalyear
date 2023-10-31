import { createService} from "./actionTypes";

export const saveCreateServiceData = (create_service_data) => {
    return {
        type: createService.SAVE_CREATE_SERVICE_DATA,
        payload: create_service_data
    };
};

export const removeCreateServiceData = (create_service_data) => {
    return {
        type: createService.REMOVE_CREATE_SERVICE_DATA,
        payload: create_service_data
    };
};

