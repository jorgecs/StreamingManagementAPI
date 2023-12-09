'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.streamingReceiveMessage = function streamingReceiveMessage (req, res, next, messageId) {
  Message.streamingReceiveMessage(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.streamingSendMessage = function streamingSendMessage (req, res, next, body) {
  Message.streamingSendMessage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
