import axios from "axios";

const Axios = axios.create({
    baseURL: "https://code-clique-backend.onrender.com/",
    headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
    }
});

export default Axios;