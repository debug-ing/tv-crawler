import { BASE_URL_SALIN_TV } from '../../shared/config.js';
import Request from '../../shared/axios.js';
import FormData from 'form-data';


async function getChannelSalin(status) {
    const url = BASE_URL_SALIN_TV + `connect_salinfinal_getdata.php`;
    const form = new FormData();
    form.append('status', status);
    return await new Request(url, "POST", form).send();
}
export { getChannelSalin };

