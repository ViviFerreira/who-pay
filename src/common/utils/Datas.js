import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export const todayDate = moment().format('YYYY-MM-DD');
export const getMonth = (data) => moment(data).month() + 1;
export const getNameMonth = (date) => moment(date, 'MM').format('MMMM');
