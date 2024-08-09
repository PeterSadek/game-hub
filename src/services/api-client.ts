import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d4d7aa73bf343a68b4b6df765f6155d",
  },
});
