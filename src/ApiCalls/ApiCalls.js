import axios from 'axios'

class ApiCalls {
  apiUrl = 'https://api.funtranslations.com/translate'

  translateText = (language, text) => {
    return new Promise((resolve) => {
      axios.get(`${this.apiUrl}/${language}.json/?text=${text}`).then(response => {
        resolve(response.data)
      })
      .catch(() => {
        resolve('Error')
      })
    })
  }
}

export default ApiCalls