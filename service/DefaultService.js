'use strict';

const Prometheus = require('prom-client')
/**
 *
 * no response value expected for this operation
 **/
exports.metricsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve(Prometheus.register.metrics());
  });
}

