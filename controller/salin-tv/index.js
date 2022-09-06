import { getChannelSalin } from './channel.js';
import { CATEGORIES_SALIN } from '../../shared/config.js';

async function getAllSalin(){
    for(const id of CATEGORIES_SALIN){
        const response = await getChannelSalin(id);
        console.log("catoryId : "+ id + " - " + response.length);
    }
}


export { getAllSalin };