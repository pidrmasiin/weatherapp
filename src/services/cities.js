import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const access= '60cf8404fa1ff481878d65b33cdc2124'

const getCity = async (city) => {

    const request = axios.get(`${baseUrl}${city}&appid=${access}`)
    return request.then(response => response.data)
  }
  
  export default { getCity }