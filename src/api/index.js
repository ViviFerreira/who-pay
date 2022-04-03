import axios from 'axios';

export const api = axios.create({
   baseURL: 'http://localhost:3001',
});

export const cadastrar = async (values) => {
   try {
      await api.post('/pagar', values);
      return 200;
   } catch (error) {
      return 400;
   }
};

export const buscar = async (url, setDado) => {
   const resp = await api.get(url);
   setDado(resp.data);
};

export const editar = async (values, id) => {
   try {
      await api.put(`/pagar/${id}`, values);
      return 200;
   } catch (error) {
      return 400;
   }
};
