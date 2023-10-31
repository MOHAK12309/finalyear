import { getSellerDashboardCardsData} from "./actionTypes";

export const getAllHostedSellerCards = (SellerCardData) => {
   return {
        type : getSellerDashboardCardsData.GET_SELLER_HOSTED_SERVICES,
        payload : SellerCardData
    };
};

export const removeAllHostedSellerCards = (removed) => {
   return {
        type : getSellerDashboardCardsData.REMOVE_SELLER_HOSTED_SERVICES,
        payload : removed
    };
};

export const getAllDraftedSellerCards = (SellerCardData) => {
   return {
        type : getSellerDashboardCardsData.GET_SELLER_DRAFTED_SERVICES,
        payload : SellerCardData
    };
};

export const removeAllDraftedSellerCards = (removed) => {
   return {
        type : getSellerDashboardCardsData.REMOVE_SELLER_DRAFTED_SERVICES,
        payload : removed
    };
};

export const getAllOngoingCards = (SellerCardData) => {
   return {
        type : getSellerDashboardCardsData.GET_SELLER_ONGOING_ORDERS,
        payload : SellerCardData
    };
};

export const removeAllOngoingCards = (removed) => {
   return {
        type : getSellerDashboardCardsData.REMOVE_SELLER_ONGOING_ORDERS,
        payload : removed
    };
};