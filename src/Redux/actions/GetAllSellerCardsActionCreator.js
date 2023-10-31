import { getAllSellers } from "./actionTypes";
import axios from "axios";

export const getAllSellerCards = (SellerCardData) => {
   return {
        type : getAllSellers.GET_ALL_SELLER_CARDS,
        payload : SellerCardData
    };
};

export const removeAllSellerCards = (removed) => {
   return {
        type : getAllSellers.REMOVE_ALL_SELLER_CARDS,
        payload : removed
    };
};
 
export const SellerCardsAPICall = async(obj, dispatch) => {
    try{
        const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
        const response = await axios.get(`${baseUrl}/api/v1/sellers/getAllSellerCards`);
        // console.log(response.data.data[obj]);
        dispatch(getAllSellerCards(response.data.data[obj]));
    }catch(error){
        // console.log(error);
    }
}