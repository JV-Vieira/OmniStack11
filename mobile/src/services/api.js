import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.99:3333'
});
//a API vai variar de acordo onde estiver ligado a maquina. De web pode se colocar localhost. O mobile é o ip em que esta ligado.


export default api;