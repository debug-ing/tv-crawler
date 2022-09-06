import { BASE_URL, API_KEY } from '../../shared/config.js';
import Request from '../../shared/axios.js';

async function getCategory(category) {
    const url = BASE_URL + `get_category_index/?api_key=${API_KEY}&subcat=${category}`;
    return (await new Request(url, "GET").send())['categories'];
}
export { getCategory };

