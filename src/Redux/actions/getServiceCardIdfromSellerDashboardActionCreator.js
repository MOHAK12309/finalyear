import { serviceCard} from "./actionTypes";

export const getServiceIDfromSellerDashboard = (service_Card_Id) => {
    return {
        type:  serviceCard.GET_SERVICE_CARD_ID_FOR_FROM_SELLER_DASHBOARD,
        payload: service_Card_Id
    };
};

export const RemoveServiceIDfromSellerDashboard = (removed) => {
    return {
        type:  serviceCard.REMOVE_SERVICE_CARD_ID_FOR_FROM_SELLER_DASHBOARD,
        payload: removed
    };
};