import { getSellerId} from "./actionTypes";

export const getSellerIdFromAuth = (seller_id, role, name, email, isEmailVerfied) => {
    return {
        type: getSellerId.GET_SELLER_ID_FROM_AUTH,
        payload: {
            seller_id,
            role,
            name,
            email,
            isEmailVerfied
        }
        
    };
};

export const removeSellerIdFromAuth = (removed) => {
    return {
        type: getSellerId.GET_SELLER_ID_FROM_AUTH,
        payload: removed
    };
};