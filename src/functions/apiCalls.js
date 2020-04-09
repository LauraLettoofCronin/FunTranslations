import axios from 'axios'

const apiUrl = 'https://api.funtranslations.com/translate'

export const get = async (url) => {
    try {
        const results = await axios.get(`${apiUrl}/${url}`)
        return results.data
    }
    catch(error) {
        return ({error: error})
    }
}