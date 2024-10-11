import request from "../api/request";

export const getAccessToken = (data) => request.post("/oauth/token", data);

export const getSetup = (data) => request.post("/api/v5/user/repos", data);
