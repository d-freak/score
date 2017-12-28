/**
 * average.js
 * 
 * @author d-freak
 */

import fs from 'fs';

(() => {
    const saveDataPath = process.env.SAVE_DATA_PATH;
    if (!fs.existsSync(saveDataPath)) {
        console.log("I have no data.");
        return;
    }
    const buffer = [];
    Object.entries(JSON.parse(fs.readFileSync(saveDataPath))).forEach(([ key, data ]) => {
        buffer.push(`${key}: ${parseInt(data.total) / parseInt(data.count)}`);
    });
    console.log(buffer.join('\n'));
})();
