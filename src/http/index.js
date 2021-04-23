import axios from 'axios'

const $host = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/'
})


export {
    $host  
}