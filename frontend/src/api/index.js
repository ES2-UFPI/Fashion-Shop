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
api.defaults.headers["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXMyQGVtYWlsLmNvbSIsInB3ZCI6IjRhODgwOGFlOWQxMDc4YTg1ODQ0OGMwNzczYWRjZWYzMjk3YmZmZTc1ZDZhZjk1YzU0OThmODQ2YTMzNjA0MjgiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY1MTUzNDU4NSwiZXhwIjoxNzUxNTM0NTg1fQ.niZZ9s4UqqxnZFAINQLjnLVaONY5Tad5uHcK9IiAvY4"
const token = localStorage.getItem("fashion-shop-authorization")
if (token != null) {
    api.defaults.headers["authorization"] = token
}
export default api; 