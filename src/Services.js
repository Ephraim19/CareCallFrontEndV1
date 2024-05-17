import axios from "axios";

export const getAllMembers = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/members/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMember = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/members/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDependants = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/dependants/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const getOverview = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/overview/${id}`);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}

export const getAllergy = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/allergy/${id}`);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}