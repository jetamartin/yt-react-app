import axios from "axios";

const KEY = 'AIzaSyAfu-RnNyO56jb5G-0K8zXNvH7MlGNjdfg';

 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
});