'use strict';

var utils = require('../utils/writer.js');
var Debug = require('../service/DebugService');

module.exports.debugsGET = function debugsGET (req, res, next) {
  Debug.debugsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.debugs_postPOST = function debugs_postPOST (req, res, next, body) {
  Debug.debugs_postPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.debugsdebugIdGET = function debugsdebugIdGET (req, res, next, body) {
  Debug.debugsdebugIdGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.debugsdebugId_deleteDELETE = function debugsdebugId_deleteDELETE (req, res, next, body) {
  Debug.debugsdebugId_deleteDELETE(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.debugsdebugId_putPUT = function debugsdebugId_putPUT (req, res, next, body) {
  Debug.debugsdebugId_putPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
