import axios from "axios";

const KEY = "AIzaSyAMvnUtB7fj535y8UDqIOyoBF0LG-eBFN8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type:'video',
    maxResults: 5,
    key: KEY
  }
});
