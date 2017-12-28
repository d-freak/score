/**
 * score.js
 * 
 * @author d-freak
 */

import fs from 'fs';

(() => {
    const saveDataPath = `${__dirname}/${process.env.SAVE_DATA_PATH}`;
    const saveData = fs.existsSync(saveDataPath) ? JSON.parse(fs.readFileSync(saveDataPath)) : {};
    process.env.INPUT.replace(/\s{2,}/, ' ').split(' ').forEach((record) => {
        if (record.length < 2) {
            throw new Error(`Invalid input: ${process.env.INPUT}`);
        }
        const key = record[0];
        const value = record.slice(1);
        if (value.match(/[^0-9]/)) {
            throw new Error(`Invalid input: ${process.env.INPUT}`);
        }
        if (saveData[key]) {
            saveData[key] = (parseInt(saveData[key]) + parseInt(value)).toString();
        }
        else {
            saveData[key] = value;
        }
    });
    fs.writeFileSync(saveDataPath, JSON.stringify(saveData));
})();
