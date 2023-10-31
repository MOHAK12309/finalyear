import { getSellerId} from "./actionTypes";
import axios from "axios";

export const getSellerIdFromBuyService = (seller_id) => {
    return {
        type: getSellerId.GET_SELLER_ID_FROM_BUY_SERVICE,
        payload: seller_id
    };
};

export const removeSellerIdFromBuyService = (seller_id) => {
    return {
        type: getSellerId.REMOVE_SELLER_ID_FROM_BUY_SERVICE,
        payload: seller_id
    };
};

export const getSellerIdFromSellerCard = (seller_id) => {
    return {
        type: getSellerId.GET_SELLER_ID_FROM_SELLER_CARD,
        payload: seller_id
    };
};

export const removeSellerIdFromSellerCard = (seller_id) => {
    return {
        type: getSellerId.REMOVE_SELLER_ID_FROM_SELLER_CARD,
        payload: seller_id
    };
};

export const SellerProfileAPICall = async(sellerId, dispatch) => {
    try {
        const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
        const response = await axios.get(`${baseUrl}/api/v1/sellers/getSellerProfile/${sellerId}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        dispatch(getSellerIdFromBuyService(response.data.data.seller));
        dispatch(getSellerIdFromSellerCard(response.data.data.seller));
      } catch (error) {
        // console.log("error", error);
      }

}