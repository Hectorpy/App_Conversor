import axios from "axios";

//////https://economia.awesomeapi.com.br/json/last/USD-BRL
const api = axios.create({
    baseURL: 'https://api.invertexto.com/v1/'
});


export default api;