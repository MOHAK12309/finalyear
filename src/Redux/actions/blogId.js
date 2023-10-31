import { Getblogs} from "./actionTypes";
import axios from "axios";
export const getAllblog = (AllBlogs) => {
    return {
        type: Getblogs.GET_ALL_BLOGS,
        payload: AllBlogs,
        
    };
};


export const BlogCardsAPICall = async(obj, dispatch) => {
    try{
        const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
        const response = await axios.get(`${baseUrl}/api/v1/blogs/getblog`);
       
        dispatch(getAllblog(response.data.data.blog));
    }catch(error){
        // console.log(error);
    }
}