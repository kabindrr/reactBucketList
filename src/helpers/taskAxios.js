import { apiProcessor } from "./axios";

const apiEP = "http://localhost:8020/api/v1/bucketList";

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

export const putBucket = (obj) => {
  const axiosObj = {
    method: "PUT",
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
