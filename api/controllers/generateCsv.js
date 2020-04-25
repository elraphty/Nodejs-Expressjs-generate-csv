/**
 * created by Raphael Osaze Eyerin
 * on 25th of April 2020
 * This file is the controller file for all csv functionalities
 */

const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const records = require('../data');

module.exports = {

    /**
     * This function will generate a stringified csv and upload to AWS S3 as a csv
     * @param {Object} req
     * @param {Object} res
     */
    generateCsv: (req, res) => {
        const csvStringifier = createCsvStringifier({
            header: [
                {id: 'name', title: 'NAME'},
                {id: 'lang', title: 'LANGUAGE'}
            ]
        });

        const csv = csvStringifier.stringifyRecords(records);
        console.log('Csv ===', csv);

        return res.send('In csv route');
    }
}