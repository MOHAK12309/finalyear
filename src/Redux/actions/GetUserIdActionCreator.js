import {getUserId} from './actionTypes';

export const getUserIdFromAuth = (get_user_id, role) => {
    return {
        type: getUserId.GET_USER_ID,
        payload: {
            get_user_id,
            role
        }
    }
}

export const removeUserIdFromAuth = (removed) => {
    return {
        type: getUserId.GET_USER_ID,
        payload: removed
    }
}