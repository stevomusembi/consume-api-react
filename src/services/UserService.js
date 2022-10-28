import axios from "axios";

const REST_API_URL = "http://157.230.13.246:11417/api/bill";
const REST_API_URL_NET = "http://157.230.13.246:11417/api/tax/resolve";

// const REST_API_URL_2 = "http://157.230.13.246:11417/api/bill/2";


class UserService{
    getBills(){
        return axios.get(REST_API_URL);
    }
    calculateNetSalary(gross){
        return axios.post(REST_API_URL_NET, gross);

    }
}
export default new UserService();