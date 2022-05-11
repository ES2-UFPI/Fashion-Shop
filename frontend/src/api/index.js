import axios from 'axios'
const api = axios
api.defaults.baseURL = "https://fashion-shop-backend.herokuapp.com"
// api.defaults.baseURL = "http://localhost:5001"
// api.defaults.headers = {
//     "X-Powered-By": "Express",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, Role, role",
//     "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS",
//     "Content-Type": "application/json; charset=utf-8",
//     "Content-Length": 1492,
//     "ETag": 'W/"5d4-u7FAmFlgixzH8KThPs4Mqjzn32U"',
//     "Connection": "keep-alive",
//     "Keep-Alive": "timeout=5"
// }
const token = localStorage.getItem("fashion-shop-authorization")
if (token != null) {
    api.defaults.headers["authorization"] = token
}
export default api;
