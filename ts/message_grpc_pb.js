// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var message_pb = require('./message_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_GetMessagesReq(arg) {
  if (!(arg instanceof message_pb.GetMessagesReq)) {
    throw new Error('Expected argument of type pb.GetMessagesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetMessagesReq(buffer_arg) {
  return message_pb.GetMessagesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetMessagesRes(arg) {
  if (!(arg instanceof message_pb.GetMessagesRes)) {
    throw new Error('Expected argument of type pb.GetMessagesRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetMessagesRes(buffer_arg) {
  return message_pb.GetMessagesRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageServiceService = exports.MessageServiceService = {
  getMessages: {
    path: '/pb.MessageService/GetMessages',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GetMessagesReq,
    responseType: message_pb.GetMessagesRes,
    requestSerialize: serialize_pb_GetMessagesReq,
    requestDeserialize: deserialize_pb_GetMessagesReq,
    responseSerialize: serialize_pb_GetMessagesRes,
    responseDeserialize: deserialize_pb_GetMessagesRes,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
