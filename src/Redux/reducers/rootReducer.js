import { combineReducers } from 'redux';

import { getSellerIdFromAuthentication} from './getSellerIdFromAuthReducer';

const rootReducer = combineReducers({
    
    get_seller_profile_id: getSellerIdFromAuthentication,

});
export default rootReducer;