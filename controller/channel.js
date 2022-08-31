import { BASE_URL, API_KEY } from '../shared/config.js';
import Request from '../shared/axios.js';

async function getChannel(id) {
    const url = BASE_URL + `get_category_posts/?api_key=${API_KEY}&id=${id}&page=1&count=25`;
    return await new Request(url, "GET").send();
}
export { getChannel };

