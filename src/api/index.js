import request from "../api/request";

export const getAccessToken = (data) => request.post("/oauth/token", data);
