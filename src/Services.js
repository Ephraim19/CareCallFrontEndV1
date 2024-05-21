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

export const postMember = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/members/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchMember = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://127.0.0.1:8000/members/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putMember = async (id, data) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/members/${id}`,
      data
    );
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

export const postDependant = async (data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/dependants/",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOverview = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/overview/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putOverview = async (id, data) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/overview/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCondition = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/condition/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postCondition = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/condition/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putCondition = async (id, data) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/condition/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllergy = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/allergy/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
