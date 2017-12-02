import axios from 'axios'

// creates and exports an axios instance that uses the base URL in every file that imports it
// base URL is a firebase endpoint

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

export default instance
