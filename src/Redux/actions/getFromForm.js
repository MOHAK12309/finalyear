import { GetblogsId} from "./actionTypes";

export const getBlogIDfromBlogform = (BlogsSchema_id, heading, description, date) => {
    return {
        type: GetblogsId.GET_FROM_FORM,
        payload: {
            BlogsSchema_id,
            heading,
            description,
            date
        }
        
    };
};

export const removeSellerIdFromAuth = (removed) => {
    return {
        type: GetblogsId.REMOVE_FROM_FORM,
        payload: removed
    };
};