import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '10s',
            target: 100
        },
        {
            duration: '30s',
            target: 100
        },
        {
            duration: '10s',    
            target: 0
        }
    ]
}

export default function () {
    http.get('http://26.199.241.99:3000');
    sleep(1);
}

