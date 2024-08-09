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

export const newMember = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/new/", data);
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

export const postOverview = async (data) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/overview/`, 
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSocialHistory = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/social/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postSocialHistory = async (data) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/social/`, 
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


export const putOtherNote = async (id, data) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/notes/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postOtherNote = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/notes/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postFamilyHistory = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/family/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Interactions
export const getInteraction = async (memberId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/interaction/${memberId}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllInteraction = async (memberId) => {

  try {
    const response = await axios.get(`http://127.0.0.1:8000/interaction/`, {
      params: {
        memberId: memberId
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//blood pressure
export const getBloodpressure = async (memberId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/bloodpressure/${memberId}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBloodPressure = async (memberId) => {

  try {
    const response = await axios.get(`http://127.0.0.1:8000/bloodpressure/`, {
      params: {
        memberId: memberId
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postBloodPressure= async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/bloodpressure/post/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const getTasks= async (memberId) => {

  try {
    const response = await axios.get(`http://127.0.0.1:8000/task/`, {
      params: {
        memberId: memberId
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postTask = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/task/post/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Post interaction
export const postInteraction = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/interaction/post/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Patch task
export const patchInteraction = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://127.0.0.1:8000/task/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//BMI
export const postBmi = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/bodymassindex/post/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//GET MEMBER JOURNEY
export const getJourney= async (memberId) => {

  try {
    const response = await axios.get(`http://127.0.0.1:8000/journey/`, {
      params: {
        memberId: memberId
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchJourney = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://127.0.0.1:8000/journey/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSpecificJourney = async (Id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/journey/${Id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};