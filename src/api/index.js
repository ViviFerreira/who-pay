import axios from 'axios';

export const api = axios.create({
   baseURL: 'http://localhost:3001',
});

export const cadastrar = async (values) => {
   try {
      const { status } = await api.post('/pagar', values);
      return status;
   } catch (error) {
      return error;
   }
};

export const buscar = async (url, setDado) => {
   const resp = await api.get(url);
   setDado(resp.data);
};

export const editar = async (values, id) => {
   try {
      const { status } = await api.put(`/pagar/${id}`, values);
      return status;
   } catch (error) {
      return error;
   }
};
