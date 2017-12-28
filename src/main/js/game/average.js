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
    const saveData = JSON.parse(fs.readFileSync(saveDataPath));
    const buffer = [];
    Object.keys(saveData).forEach((key) => {
        const data = saveData[key];
        buffer.push(`${key}: ${parseInt(data.total) / parseInt(data.count)}`);
    });
    console.log(buffer.join('\n'));
})();
