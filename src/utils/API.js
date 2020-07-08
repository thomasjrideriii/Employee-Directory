import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";
const RESULTNUMBER = "10";

export default {
  search: function() {
    return axios.get(BASEURL + RESULTNUMBER);
  }
};
