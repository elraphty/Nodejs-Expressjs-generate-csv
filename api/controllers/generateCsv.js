/**
 * created by Raphael Osaze Eyerin
 * on 25th of April 2020
 * This file is the controller file for all csv functionalities
 */

const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const records = require('../data');
const ResponseService = require('../services/responseService');
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET,
});

module.exports = {

    /**
     * This function will generate a stringified csv and upload to AWS S3 as a csv
     * @param {Object} req
     * @param {Object} res
     */
    generateCsv: (req, res) => {

        try {
            const csvStringifier = createCsvStringifier({
                header: [
                    {id: 'name', title: 'NAME'},
                    {id: 'lang', title: 'LANGUAGE'}
                ]
            });

            const csv = csvStringifier.stringifyRecords(records);

            const params = {
                Bucket: process.env.AWS_BUCKET, // pass your bucket name
                Key: `users-${new Date().getTime()}.csv`, // file will be saved as testBucket/contacts.csv
                ACL: "public-read",
                Body: csv,
                ContentType: "text/csv",
            };

            s3.upload(params, function (s3Err, data) {
                if (s3Err) throw s3Err;
                else {
                return ResponseService.json(201, res, "File created successfully", {
                    redirectUri: data.Location,
                });
                }
            });

        } catch(e) {
            return ResponseService.error(
                e,
                res
            );
        }
    }
}