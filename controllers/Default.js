'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.metricsGET = function metricsGET (req, res, next) {
  Default.metricsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
