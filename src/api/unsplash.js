import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID jwm4kaqbg6hD6ld7o9N9OPJbSYxxnbuxvSuSJ8joZp4",
  },
});
