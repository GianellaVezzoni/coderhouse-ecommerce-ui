import axios from "axios";

const instance = () => {
  const storage = localStorage.getItem("token");
  let token = null;
  if (storage !== null) {
    token = storage;
  }
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
  });
};

export const httpGetMethod = async (url, params) => {
  return instance()
    .get(url, params)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err.response));
};

export const httpPostMethod = async (
  url,
  params,
  contentType = "application/json"
) => {
  return instance()
    .post(`${url}`, params, {
      headers: {
        "Content-Type": contentType,
      },
    })
    .then((res) => {
      return {
        success: true,
        message: "",
        response: res.data,
      };
    })
    .catch((err) => {
      return err;
    });
};

export const httpDeleteMethod = async (url, params) => {
  return instance()
    .delete(url, { data: params })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};

export const httpPatchMethod = async (url, params) => {
  await axios
    .patch(url, params)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err));
};

export const httpPutMethod = async (url, params) => {
  return instance()
    .put(url, params)
    .then((res) => {
      return {
        success: true,
        message: "",
        response: res.data,
      };
    })
    .catch((err) => {
      return err;
    });
};
