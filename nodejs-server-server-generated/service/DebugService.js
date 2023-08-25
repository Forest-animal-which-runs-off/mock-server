'use strict';


/**
 * デバッグ全取得
 *
 * returns DebugResponse
 **/
exports.debugsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023/08/13",
  "resolve" : "解決法",
  "cause" : "原因",
  "updateAt" : "2023/08/13",
  "links" : [ "[\"http://localhost:3000\"]", "[\"http://localhost:3000\"]" ],
  "id" : "1",
  "title" : "エラータイトル",
  "body" : "エラー本文",
  "techs" : [ "[\"javascript\"]", "[\"javascript\"]" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * デバッグを新規作成
 *
 * body DebugPostRequest DebugRequest
 * returns DebugResponse
 **/
exports.debugs_postPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023/08/13",
  "resolve" : "解決法",
  "cause" : "原因",
  "updateAt" : "2023/08/13",
  "links" : [ "[\"http://localhost:3000\"]", "[\"http://localhost:3000\"]" ],
  "id" : "1",
  "title" : "エラータイトル",
  "body" : "エラー本文",
  "techs" : [ "[\"javascript\"]", "[\"javascript\"]" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 指定のデバッグを取得
 *
 * body Debugs_debugId_body デバッグのID
 * returns DebugResponse
 **/
exports.debugsdebugIdGET = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023/08/13",
  "resolve" : "解決法",
  "cause" : "原因",
  "updateAt" : "2023/08/13",
  "links" : [ "[\"http://localhost:3000\"]", "[\"http://localhost:3000\"]" ],
  "id" : "1",
  "title" : "エラータイトル",
  "body" : "エラー本文",
  "techs" : [ "[\"javascript\"]", "[\"javascript\"]" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * デバッグを削除
 *
 * body Debugs_debugIddelete_body デバッグID
 * no response value expected for this operation
 **/
exports.debugsdebugId_deleteDELETE = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * デバッグを更新
 *
 * body DebugPutRequest デバッグIDとbody
 * returns DebugResponse
 **/
exports.debugsdebugId_putPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023/08/13",
  "resolve" : "解決法",
  "cause" : "原因",
  "updateAt" : "2023/08/13",
  "links" : [ "[\"http://localhost:3000\"]", "[\"http://localhost:3000\"]" ],
  "id" : "1",
  "title" : "エラータイトル",
  "body" : "エラー本文",
  "techs" : [ "[\"javascript\"]", "[\"javascript\"]" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

