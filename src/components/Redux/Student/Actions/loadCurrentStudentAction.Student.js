import axios from "axios";
const loadCurrentStudentAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadStudentRequest",
    });
    const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/student/load-current-student");
    dispatch({
      type: "LoadStudentRequestSuccess",
      payload: await response.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadStudentRequestFailure",
      payload: error.response.data.message,
    });
  }
};

export default loadCurrentStudentAction;
