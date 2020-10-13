import axios from "axios";
var instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
  timeout: 30000
});

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers.get["Content-Type"] =
  "application/json;charset=UTF-8";

export default instance;
