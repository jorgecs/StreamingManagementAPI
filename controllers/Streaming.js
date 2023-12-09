'use strict';

var utils = require('../utils/writer.js');
var Streaming = require('../service/StreamingService');

module.exports.streamingDelete = function streamingDelete (req, res, next, streamingId) {
  Streaming.streamingDelete(streamingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.streamingEdit = function streamingEdit (req, res, next, streamingId, title, description) {
  Streaming.streamingEdit(streamingId, title, description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.streamingEnd = function streamingEnd (req, res, next, streamingId) {
  Streaming.streamingEnd(streamingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.streamingModerate = function streamingModerate (req, res, next, streamingId, moderation) {
  Streaming.streamingModerate(streamingId, moderation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.streamingReceive = function streamingReceive (req, res, next, streamingId) {
  Streaming.streamingReceive(streamingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.streamingStart = function streamingStart (req, res, next, body) {
  Streaming.streamingStart(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
