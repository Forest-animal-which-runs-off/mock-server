'use strict';


/**
 * トークン発行
 *
 * returns String
 **/
exports.csrfPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "fagafwafgaf";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ログイン
 *
 * body Login_body LoginRequest
 * returns inline_response_200
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "token" : "fkashgjkashjkgfhasjkfhnajwkhfjkafewq"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ログアウト
 *
 * no response value expected for this operation
 **/
exports.logoutPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 新規登録
 *
 * body Signup_body SignupRequest
 * returns UserResponse
 **/
exports.signupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "佐藤 仁",
  "id" : "1",
  "email" : "test@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

