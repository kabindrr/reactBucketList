import { apiProcessor } from "./axios";

const apiEP = import.meta.env.PROD
  ? "/api/v1/bucketList"
  : "http://localhost:3001/api/v1/bucketList";

export const addBucket = (obj) => {
  const axiosObj = {
    method: "POST",
    url: apiEP,
    data: obj,
  };
  return apiProcessor(axiosObj);
};
export const postBucket = (obj) => {
  const axiosObj = {
    method: "POST",
    url: apiEP,
    data: obj,
  };

  return apiProcessor(axiosObj);
};

export const getBucket = (obj) => {
  const axiosObj = {
    method: "GET",
    url: apiEP,
    data: obj,
  };
  return apiProcessor(axiosObj);
};

export const updateBucket = (obj) => {
  const axiosObj = {
    method: "PATCH",
    url: apiEP,
    data: obj,
  };
  return apiProcessor(axiosObj);
};

export const deleteBucket = (obj) => {
  const axiosObj = {
    method: "DELETE",
    url: apiEP,
    data: obj,
  };
  return apiProcessor(axiosObj);
};
