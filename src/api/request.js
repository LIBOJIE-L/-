import axios from "axios";

export default axios.create({
  baseURL: "https://gitee.com/oauth/token",
});
