import { combineReducers } from 'redux';
import { createServiceDataReducer } from './createServiceDataReducer';
import { saveFetchedServiceData } from './saveFetchedServiceData';
import { navigationServiceData } from './navigationServiceDataReducer';
import { getSellerIdFromAuthentication} from './getSellerIdFromAuthReducer';
import { getSellerIdForProfileView } from './getSellerIdForSellerProfileViewReducer';
import { getUserIdFromAuthentication } from './getUserIdReducer';
import { getSellerCards } from './GetAllSellerCardsReducer';
import { AllHostedServiceData } from './allhostedserviceDataReducers';
import { getServiceIDfromSellerDashboard } from './getServiceIdFromSellerDashboardReducer';
import { SellerDashboardHostedData, SellerDashboardDraftedData, SellerDashboardOngoingOrderData } from './sellerDashboardHostedCardReducer';
import { getBlogid } from './getBlogId';
import { getblogIdFromForm } from './getIdFromBlogForm';
const rootReducer = combineReducers({
    create_service_data: createServiceDataReducer,
    fetched_service_data: saveFetchedServiceData,
    navigation_service_data: navigationServiceData,
    get_seller_profileView_id: getSellerIdForProfileView,
    get_blog_id:getBlogid ,
    get_seller_profile_id: getSellerIdFromAuthentication,
    get_user_id: getUserIdFromAuthentication,
    get_Seller_Cards: getSellerCards,
    get_blog_id_from_blog_form:getblogIdFromForm,
    all_hosted_services: AllHostedServiceData,
    get_Service_Id_From_Seller_Dashboard : getServiceIDfromSellerDashboard,
    get_Seller_Dashboard_Hosted_Data : SellerDashboardHostedData,
    get_Seller_Dashboard_Drafted_Data : SellerDashboardDraftedData,
    get_Seller_Dashboard_Ongoing_Order_Data : SellerDashboardOngoingOrderData,
});
export default rootReducer;