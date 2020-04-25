/**
 * created by Raphael Osaze Eyerin
 * on 25th of April 2020
 * This file is the controller file for all csv functionalities
 */

module.exports = {

    /**
     * This function will generate a stringified csv and upload to AWS S3 as a csv
     * @param {Object} req
     * @param {Object} res
     */
    generateCsv: (req, res) => {
        return res.send('In csv route')
    }
}