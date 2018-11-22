import axios from 'axios'

axios.defaults.baseURL = 'https://newsapi.org/v2/'
const apiKey = 'c31ab2cf631647eda1dcf44d6155466e'

const appService = {
  getNews (quote) {
    return axios.get(`everything?q=${quote}&pageSize=20`, { headers: { 'X-Api-Key': apiKey } })
  },

  getLatestNews () {
    return axios.get('top-headlines?pageSize=100&country=us', { headers: { 'X-Api-Key': apiKey } })
  }
}

export default appService
