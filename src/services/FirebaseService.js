import { firebaseDatabase as db } from 'common/utils/Firebase';

export const addOrEditDespesa = async (despesa) => {
   if (despesa.id) {
      try {
         await db.collection('despesas').doc(despesa.id).update(despesa);
         return 200;
      } catch (error) {
         return error;
      }
   } else {
      try {
         await db.collection('despesas').doc().set(despesa);
         return 200;
      } catch (error) {
         return error;
      }
   }
};

export const getDespesas = (setDado) => {
   const onResult = (querySnapshot) => {
      const despesas = [];
      querySnapshot.forEach((despesa) => {
         const data = despesa.data();
         despesas.push({ id: despesa.id, ...data });
      });
      setDado(despesas);
   };

   const onError = (error) => error;

   db.collection('despesas').onSnapshot(onResult, onError);
};

export const onDeleteDespesa = async (id) => {
   try {
      await db.collection('despesas').doc(id).delete();
      return 200;
   } catch (error) {
      return error;
   }
};

export const getDespesaById = async (id) => {
   const despesa = await db.collection('despesas').doc(id).get();
   console.log(despesa);
};
