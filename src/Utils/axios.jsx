import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2FmZGM4ZTRkMTQzNzQ2YzQ3YTBkZTk4OTdhNDZkNCIsInN1YiI6IjY2M2E4MTVmNWRlZWRmNzg2MzkyYTljNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JH2yQrDxNmBEl0yYyHPMr8Xf8KKKHk304wa5nDa-j5c'
      },
})
export default instance