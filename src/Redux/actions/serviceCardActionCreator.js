import { serviceCard} from "./actionTypes";
import axios from 'axios';

export const saveFetchedServiceDataAction = (fetched_service_data) => {
    return {
        type:  serviceCard.SAVE_FETCHED_SERVICE_DATA,
        payload: fetched_service_data
    };
};

export const removeFetchedServiceDataAction = (removed) => {
    return {
        type:  serviceCard.REMOVE_FETCHED_SERVICE_DATA,
        payload: removed
    };
};

export const saveNavigationVariableAction = (serviceUrl, serviceId, obj) => {
    return {
        type:  serviceCard.SAVE_NAVIGATION_DATA,
        payload: {
            serviceUrl,
            serviceId,
            obj
        }
    };
};

export const removeNavigationVariableAction = (removed) => {
    return {
        type:  serviceCard.REMOVE_NAVIGATION_DATA,
        payload: removed
    };
};

export const saveAllHostedServiceData = (all_hosted_data) => {
    return {
        type : serviceCard.SAVE_ALL_HOSTED_SERVICE_DATA,
        payload : all_hosted_data
    };
};

export const APICall = async(e, obj, dispatch) => {
    try {
        const response = await axios.get(e);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        dispatch(saveFetchedServiceDataAction(response.data.data[obj]));
      } catch (error) {
        // console.log("error", error);
      }

}