import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://reqres.in';

export const options = {
    vus: 500,
    duration: '5m',
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500']
    }
}

export default function(){
    const res = http.post(`${BASE_URL}/api/users`,{
        name: "Willgner",
        job: "QA"
      });
    check(res, {
        'status code 201': (r) => r.status === 201
    });
}
