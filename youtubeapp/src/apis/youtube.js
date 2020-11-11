import axios from "axios";

const KEY = "AIzaSyBR5_S-hs49I1ErUVpCrgRf3uHn4X-a-Kk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type:'video',
    maxResults: 10,
    key: KEY
  }
});
