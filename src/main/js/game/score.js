/**
 * score.js
 * 
 * @author d-freak
 */

import fs from 'fs';

(() => {
    const saveDataPath = process.env.SAVE_DATA_PATH;
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
            const data = saveData[key];
            data.total = (parseInt(data.total) + parseInt(value)).toString();
            data.count = (parseInt(data.count) + 1).toString();
            saveData[key] = data;
        }
        else {
            saveData[key] = { total: value, count: 1 };
        }
    });
    fs.writeFileSync(saveDataPath, JSON.stringify(saveData));
})();
