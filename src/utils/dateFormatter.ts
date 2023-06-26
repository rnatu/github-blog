import moment from 'moment';
import 'moment/dist/locale/pt-br';

export function dateFormatter(date: string) {
  return moment(date).fromNow();
}
