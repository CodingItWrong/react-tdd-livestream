import axios from 'axios';

const token =
  '7a0e4100a4403264f0242b1c75c2e442e5df08158ede2c5a7144c33610d2ec68';

const api = axios.create({
  baseURL: 'https://sandboxapi.reststate.org/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
