import axios from "axios"

export default () => {
  return axios.create({
    //8081 is taken by class
    baseURL: "http://localhost:8050/",
  })
}
