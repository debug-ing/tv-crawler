import { getChannel } from './channel.js';
import { getCategory } from './category.js';
import { CATEGORIES } from '../../shared/config.js';

async function getAll(){
    for(const name of CATEGORIES){
        await GetCateogryWithChannel(name);
    }
}

async function GetCateogryWithChannel(category){
    let countChannel = 0;
    const data = await getCategory(category);
    for(const item of data){
        const channel = await getChannel(item.cid);
        countChannel = countChannel + channel.posts.length;
        for(let item of channel.posts){
            console.log( item['channel_name'] + " - " + item['channel_url']);
        }
    }
}

export { getAll };