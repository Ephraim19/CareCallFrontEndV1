import axios from "axios";

export const getAllMembers = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/members/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }