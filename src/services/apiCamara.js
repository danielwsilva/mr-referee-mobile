import axios from 'axios';

const api_camara = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export default api_camara;
