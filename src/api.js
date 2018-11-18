import axios from 'axios';

const token = 'dc583c9bd0c8d457615198adb120e2ce80b18bd16d4d30fcc18bfab6040797cf';

const api = axios.create({
  baseURL: 'https://sandboxapi.reststate.org',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${token}`,
  },
});

export default api;
