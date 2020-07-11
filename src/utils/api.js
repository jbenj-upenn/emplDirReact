import Axios from "axios";

//get all API calls
export default { 
    getEmps: function(query) {
        return Axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};