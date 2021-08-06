// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var foot_print_pb = require('./foot_print_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var user_pb = require('./user_pb.js');

function serialize_pb_GetFootPrintsReq(arg) {
  if (!(arg instanceof foot_print_pb.GetFootPrintsReq)) {
    throw new Error('Expected argument of type pb.GetFootPrintsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetFootPrintsReq(buffer_arg) {
  return foot_print_pb.GetFootPrintsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetFootPrintsRes(arg) {
  if (!(arg instanceof foot_print_pb.GetFootPrintsRes)) {
    throw new Error('Expected argument of type pb.GetFootPrintsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetFootPrintsRes(buffer_arg) {
  return foot_print_pb.GetFootPrintsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUnreadCountReq(arg) {
  if (!(arg instanceof foot_print_pb.GetUnreadCountReq)) {
    throw new Error('Expected argument of type pb.GetUnreadCountReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUnreadCountReq(buffer_arg) {
  return foot_print_pb.GetUnreadCountReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUnreadCountRes(arg) {
  if (!(arg instanceof foot_print_pb.GetUnreadCountRes)) {
    throw new Error('Expected argument of type pb.GetUnreadCountRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUnreadCountRes(buffer_arg) {
  return foot_print_pb.GetUnreadCountRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var FootPrintServiceService = exports.FootPrintServiceService = {
  getFootPrints: {
    path: '/pb.FootPrintService/GetFootPrints',
    requestStream: false,
    responseStream: false,
    requestType: foot_print_pb.GetFootPrintsReq,
    responseType: foot_print_pb.GetFootPrintsRes,
    requestSerialize: serialize_pb_GetFootPrintsReq,
    requestDeserialize: deserialize_pb_GetFootPrintsReq,
    responseSerialize: serialize_pb_GetFootPrintsRes,
    responseDeserialize: deserialize_pb_GetFootPrintsRes,
  },
  getUnreadCount: {
    path: '/pb.FootPrintService/GetUnreadCount',
    requestStream: false,
    responseStream: false,
    requestType: foot_print_pb.GetUnreadCountReq,
    responseType: foot_print_pb.GetUnreadCountRes,
    requestSerialize: serialize_pb_GetUnreadCountReq,
    requestDeserialize: deserialize_pb_GetUnreadCountReq,
    responseSerialize: serialize_pb_GetUnreadCountRes,
    responseDeserialize: deserialize_pb_GetUnreadCountRes,
  },
};

exports.FootPrintServiceClient = grpc.makeGenericClientConstructor(FootPrintServiceService);
