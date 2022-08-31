import { BASE_URL} from '../shared/config.js';
import Request from '../shared/axios.js';

async function getChannel(id) {
    const url = BASE_URL + `get_category_posts/?api_key=cda11ZXz3LAnPvJlFB4RhTKgjpHk7wuxYVt0ac5O2GME9SsoDQ&id=${id}&page=1&count=15`;
    return await new Request(url,"GET").send();
}
export { getChannel }; 

