import axios from "axios";

const REST_API_URL = "http://157.230.13.246:11417/api/bill";

class UserService{
    getBills(){
        return axios.get(REST_API_URL);
    }
}
export default new UserService();