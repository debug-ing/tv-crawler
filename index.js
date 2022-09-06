import { getAll } from './controller/cloob-tv/index.js';
import { getAllSalin } from './controller/salin-tv/index.js';
import { MODE } from './shared/config.js';

async function main(){
    if(MODE == 'cloob-tv'){
        await getAll();
    }else if (MODE == 'salin-tv'){
        await getAllSalin();
    }
}
main();