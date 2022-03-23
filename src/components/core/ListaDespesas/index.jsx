import { buscar } from 'api';
import { useEffect, useState } from 'react';

export function ListaDespesa({ url }) {
   const [listaDespesas, setListaDespesas] = useState([]);

   const atualizarLista = () => {
      buscar(url, setListaDespesas);
      console.log('Passou aqui');
   };

   // useEffect(() => {

   //    console.log(listaDespesas);
   // }, [url]);

   return listaDespesas.map((despesa) => despesa.item);
}
