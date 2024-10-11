import axios from "axios";

export const apiProcessor = async (axiosObj) => {
  try {
    const { method, url, data } = axiosObj;
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
