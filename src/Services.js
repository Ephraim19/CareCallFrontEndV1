import axios from "axios";

const url = "https://ephraim.pythonanywhere.com/"
// const url = "http://127.0.0.1:8000/";

export const searchMember = async (data) => {
  const response = await axios.post(url + "search/", data);
  return response.data;
};


export const getAllMembers = async () => {
  try {
    const response = await axios.get(url + "members/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMember = async (id) => {
  try {
    const response = await axios.get(url + `members/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postMember = async (data) => {
  try {
    const response = await axios.post(url + "members/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchMember = async (id, data) => {
  try {
    const response = await axios.patch(url + `members/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putMember = async (id, data) => {
  try {
    const response = await axios.put(url + `members/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const newMember = async (data) => {
  const response = await axios.post(url + "new/", data);
  return response.data;
};

export const getDependants = async (id) => {
  try {
    const response = await axios.get(url + `dependants/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postDependant = async (data) => {
  const response = await axios.post(url + "dependants/", data);
  return response.data;
};

export const getOverview = async (id) => {
  try {
    const response = await axios.get(url + `overview/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putOverview = async (id, data) => {
  try {
    const response = await axios.put(url + `overview/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postOverview = async (data) => {
  const response = await axios.post(url + `overview/`, data);
  return response.data;
};

export const getSocialHistory = async (id) => {
  try {
    const response = await axios.get(url + `social/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postSocialHistory = async (data) => {
  const response = await axios.post(url + `social/`, data);
  return response.data;
};

export const getCondition = async (id) => {
  try {
    const response = await axios.get(url + `condition/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postCondition = async (data) => {
  const response = await axios.post(url + "condition/", data);
  return response.data;
};

export const putCondition = async (id, data) => {
  try {
    const response = await axios.put(url + `condition/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllergy = async (id) => {
  try {
    const response = await axios.get(url + `allergy/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putOtherNote = async (id, data) => {
  try {
    const response = await axios.put(url + `notes/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postOtherNote = async (data) => {
  const response = await axios.post(url + "notes/", data);
  return response.data;
};

export const postFamilyHistory = async (data) => {
  const response = await axios.post(url + "family/", data);
  return response.data;
};

//Interactions

export const getInteraction = async (memberId) => {
  try {
    const response = await axios.get(url + `interaction/${memberId}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllInteraction = async (memberId) => {
  try {
    const response = await axios.get(url + `interaction/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//blood pressure
export const getBloodpressure = async (memberId) => {
  try {
    const response = await axios.get(url + `bloodpressure/${memberId}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBloodPressure = async (memberId) => {
  try {
    const response = await axios.get(url + `bloodpressure/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postBloodPressure = async (data) => {
  const response = await axios.post(url + "bloodpressure/post/", data);
  return response.data;
};

export const getTasks = async (memberId) => {
  try {
    const response = await axios.get(url + `task/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postTask = async (data) => {
  const response = await axios.post(url + "task/post/", data);
  return response.data;
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(url + `task/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Post interaction
export const postInteraction = async (data) => {
  const response = await axios.post(url + "interaction/post/", data);
  return response.data;
};

//Patch task
export const patchInteraction = async (id, data) => {
  try {
    const response = await axios.patch(url + `task/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//GET MEMBER JOURNEY
export const getJourney = async (memberId) => {
  try {
    const response = await axios.get(url + `journey/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchJourney = async (id, data) => {
  try {
    const response = await axios.patch(url + `journey/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSpecificJourney = async (Id) => {
  try {
    const response = await axios.get(url + `journey/${Id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Temperature

export const getTemperature = async (memberId) => {
  try {
    const response = await axios.get(url + `temperature/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postTemperature = async (data) => {
  const response = await axios.post(url + "temperature/post/", data);
  return response.data;
};

//Oxygen

export const getOxygen = async (memberId) => {
  try {
    const response = await axios.get(url + `oxygen/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postOxygen = async (data) => {
  const response = await axios.post(url + "oxygen/post/", data);
  return response.data;
};

//Pulse rate

export const getPulse = async (memberId) => {
  try {
    const response = await axios.get(url + `pulse/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postPulse = async (data) => {
  const response = await axios.post(url + "pulse/post/", data);
  return response.data;
};

//Respiratory rate

export const getRespiratory = async (memberId) => {
  try {
    const response = await axios.get(url + `respiratory/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postRespiratory = async (data) => {
  const response = await axios.post(url + "respiratory/post/", data);
  return response.data;
};

//RBS

export const getRBS = async (memberId) => {
  try {
    const response = await axios.get(url + `randombloodsugar/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postRBS = async (data) => {
  const response = await axios.post(url + "randombloodsugar/post/", data);
  return response.data;
};

//FBS

export const getFBS = async (memberId) => {
  try {
    const response = await axios.get(url + `fastingbloodsugar/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postFBS = async (data) => {
  const response = await axios.post(url + "fastingbloodsugar/post/", data);
  return response.data;
};

//HBA1C

export const getHba1c = async (memberId) => {
  try {
    const response = await axios.get(url + `glycatedhaemoglobin/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postHba1c = async (data) => {
  const response = await axios.post(url + "glycatedhaemoglobin/post/", data);
  return response.data;
};

//BMI

export const getBMI = async (memberId) => {
  try {
    const response = await axios.get(url + `bodymassindex/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postBMI = async (data) => {
  const response = await axios.post(url + "bodymassindex/post/", data);
  return response.data;
};

//ANALYTICS

export const getTasksAnalytics = async () => {
  try {
    const response = await axios.get(url + "tasks/analytics/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMemberAnalytics = async (memberId) => {
  try {
    const response = await axios.get(url + "member/analytics/", {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMemberAnalyticsFbs = async (memberId) => {
  try {
    const response = await axios.get(url + "member/analytics/fbs/", {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getMemberAnalyticsRbs = async (memberId) => {
  try {
    const response = await axios.get(url + "member/analytics/rbs/", {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getMemberAnalyticsHba1c = async (memberId) => {
  const response = await axios.get(url + "member/analytics/hba1c/", {
    params: {
      memberId: memberId,
    },
  });
  return response.data;
};

//APPOINTMENTS
export const postAppointment = async (data) => {
  const response = await axios.post(url + "appointment/post/", data);
  return response.data;
};

export const getAppointments = async (memberId) => {
  const response = await axios.get(url + "appointment/", {
    params: {
      memberId: memberId,
    },
  });
  return response.data;
};

export const getAppointmentsAnalytics = async () => {
  const response = await axios.get(url + "appointment/analytics/");
  return response.data;
};

//HR
export const getHR = async () => {
  const response = await axios.get(url + "hr/");
  return response.data;
};

//my tasks
export const getMyTasks = async (hr_email) => {
  try {
    const response = await axios.get(url + `mytasks/`, {
      params: {
        hr_email: hr_email,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//interaction analytics
export const getInteractionAnalytics = async () => {
  const response = await axios.get(url + "interaction/analytics/");
  return response.data;
};

//Whatsapp send txt
export const sendWhatsapp = async (data) => {
  const response = await axios.post(url + "send-whatsapp/", data);
  return response.data;
};

export const getWhatsapp = async (memberId) => {
  try {
    const response = await axios.get(url + `whatsapp/`, {
      params: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Webhook triggered
export const triggerWebhook = async (data) => {
  const response = await axios.post("https://ephraim.pythonanywhere.com/webhook/", data);
  return response.data;
};
