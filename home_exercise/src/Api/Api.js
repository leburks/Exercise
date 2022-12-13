import axios from 'axios'
var baseUrl
baseUrl = 'https://frontend-take-home.fetchrewards.com'


const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default class API {
    getData = async () => {
        try {
            const { data } = await api.get('/form')
            return data
        } catch (err) {
            alert('failed to fetch occupation and state')
        }
    }
    postData = async ({ name, email, password, occupation, state }) => {
        try {
            alert('User data saved successfully')
            const addData = await api.post('/form', { name, email, password, occupation, state })
        } catch (error) {
            console.log(error)
        }
    }
}
