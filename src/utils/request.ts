import axios from "axios";
import { getAccessToken } from "@/utils/auth";
import type { IResponse } from "@/types";
import { successMessage, warningMessage } from "./message";
import { stringify } from "querystring";

const service = axios.create({
  baseURL: "/api",
  // timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 在请求发送之前对请求数据进行处理
    // const token = getAccessToken();
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`; // 携带token
    // }
    // 如果请求数据存在且不是 JSON 格式，转换为 JSON 格式

    if (config.data && typeof config.data !== 'string') {
      try {
        config.data = JSON.stringify(config.data);
      } catch (error) {
        console.error("Failed to convert data to JSON:", error);
      }
    }
    if (config.data) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: IResponse) => {
    console.log(response.data);
    const { code, msg, data } =response.data;//JSON.parse(response.data)
    console.log("res-msg",msg);
    if (20001 == code) {
      warningMessage(msg);
      return false;
    } //异常信息提示
    if (20000 == code && msg!="获取所有任务成功") successMessage(msg); //任务创建成功、获取所有任务成功、任务取消成功
    return data;
  },
  (error) => {
    // 对响应错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
