'use strict';


/**
 * Receive message
 *
 * messageId String message to retrieve
 * returns Message
 **/
exports.streamingReceiveMessage = function(messageId) {
  return new Promise(function(resolve, reject) {
    const Message = {
      messageType: (Math.floor(Math.random() * 2) + 1),
      messageId: messageId,
      emitter: (Math.floor(Math.random() * 9) + 1),
      receiver: (Math.floor(Math.random() * 9) + 1),
      content: "Hello"
    }
    resolve(Message)
  });
}


/**
 * Send message
 *
 * body Message 
 * returns APIResponse
 **/
exports.streamingSendMessage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "message": `Message sent from ${body.emitter} to ${body.receiver} with content ${body.content}`
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


