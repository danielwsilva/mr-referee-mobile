import axios from 'axios';

const api_uf = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
});

export default api_uf;
