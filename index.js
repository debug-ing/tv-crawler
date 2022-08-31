import { getChannel } from './controller/channel.js';
import { getCategory } from './controller/category.js';
import { CATEGORIES } from './shared/config.js';

async function main(){
    for(const name of CATEGORIES){
        GetCateogryWithChannel(name);
    }
}

async function GetCateogryWithChannel(category){
    let countChannel = 0;
    const data = await getCategory(category);
    for(const item of data){
        const channel = await getChannel(item.cid);
        countChannel = countChannel + channel.posts.length;
    }
    console.log(`Category: ${category} - Count of channel: ${countChannel}`);
}

main();