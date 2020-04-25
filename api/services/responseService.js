/**
 * created by Raphael Osaze Eyerin
 * on 25th of April 2020
 * responseService.js
 */

module.exports = {
    /**
     * This function will return a success json reponse
     * @param {Object} res
     * @param {Integer} status
     * @param {String} message
     * @param {Object} data
     * @param {Object} meta
    */
    json: function(status, res, message, data, meta) {
        var response = {
            response: {
                message: message
            }
        };
        if (typeof data !== 'undefined') {
            response.response.data = data;
        }
        if (typeof meta !== 'undefined') {
            response.response.meta = meta;
        }
        return res.status(status).json(response);
    },

    /**
     * This function will return an error json reponse
     * @param {Object} err
     * @param {Object} res
    */
    error(err, res) {
        let response = {
            message: 'error has occured',
            error: err.message
        };
        return res.status(400).json(response);
    },
};