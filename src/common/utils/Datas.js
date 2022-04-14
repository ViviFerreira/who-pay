import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export const todayDate = moment().format('YYYY-MM-DD');

export const dateFormat = (date) =>
   moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');

export const getMonth = (data) => moment(data).month() + 1;

export const getNameMonth = (date) => moment(date, 'MM').format('MMMM');

export const getNameMonthDate = (date) =>
   moment(date, 'YYYY-MM-DD').format('MMMM');

export const getNextMonth = (date) => {
   const data = moment(date, 'YYYY-MM-DD');
   return data.add(1, 'M').format('YYYY-MM-DD');
};
