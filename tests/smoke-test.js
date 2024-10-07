import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '5s',
}

export default function () {
  http.get('http://26.199.241.99:3000');
  sleep(1);
}
