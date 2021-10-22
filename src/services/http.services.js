import axios from "axios";

const HttpService = {
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios.defaults.headers.common["token"] = "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv";
  },

  get(url, query = "") {
    return axios.get(`${url}/${query}`).catch(error => {
      throw new Error(error);
    });
  },
};

export default HttpService;
