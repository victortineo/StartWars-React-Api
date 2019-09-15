import axios from 'axios'
import {BASE_URL} from '../constants/api-constants'


class Api {
    getData(res){
        return res.data[0].results
    }
    films(){
        return axios.get(`${BASE_URL}films`).then(this.getData)
    }
    people(){
        return axios.get(`${BASE_URL}people`).then(this.getData)
    }
    planets(){
        return axios.get(`${BASE_URL}planets`).then(this.getData)
    }
    species(){
        return axios.get(`${BASE_URL}species`).then(this.getData)
    }
    starships(){
        return axios.get(`${BASE_URL}starships`).then(this.getData)
    }
    vehicles(){
        return axios.get(`${BASE_URL}vehicles`).then(this.getData)
    }
}

export default Api