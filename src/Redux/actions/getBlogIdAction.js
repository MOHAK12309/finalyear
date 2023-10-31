
import { GetblogsId} from "./actionTypes";
import axios from "axios";
export const getOneblogId = (blogsId) => {
    return {
        type: GetblogsId.GET_ID_BLOGS,
        payload: blogsId,
        
    };
};


export const BlogCardsAPICall = async(blog_id, dispatch) => {
    try{
        const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
        const response = await axios.get(`${baseUrl}/api/v1/blogs/getOneblog/${blog_id}`);
       
        dispatch(getAllblog(response.data.data.blog));
    }catch(error){
        // console.log(error);
    }
}