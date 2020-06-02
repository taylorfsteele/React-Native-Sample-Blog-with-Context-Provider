import axios from "axios";
import { NGROK } from "react-native-dotenv";

export default axios.create({
  baseURL: "http://18f5c1458a41.ngrok.io/",
});
