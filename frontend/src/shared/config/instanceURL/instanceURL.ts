import axios from "axios";

import baseURL from "../configuration";

const instanceURL = axios.create({
  baseURL
});

export default instanceURL;
