// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var like_pb = require('./like_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var user_pb = require('./user_pb.js');
var room_pb = require('./room_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ConsentLikeReq(arg) {
  if (!(arg instanceof like_pb.ConsentLikeReq)) {
    throw new Error('Expected argument of type pb.ConsentLikeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConsentLikeReq(buffer_arg) {
  return like_pb.ConsentLikeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ConsentLikeRes(arg) {
  if (!(arg instanceof like_pb.ConsentLikeRes)) {
    throw new Error('Expected argument of type pb.ConsentLikeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ConsentLikeRes(buffer_arg) {
  return like_pb.ConsentLikeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateLikeReq(arg) {
  if (!(arg instanceof like_pb.CreateLikeReq)) {
    throw new Error('Expected argument of type pb.CreateLikeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateLikeReq(buffer_arg) {
  return like_pb.CreateLikeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateLikeRes(arg) {
  if (!(arg instanceof like_pb.CreateLikeRes)) {
    throw new Error('Expected argument of type pb.CreateLikeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateLikeRes(buffer_arg) {
  return like_pb.CreateLikeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetOldestLikeReq(arg) {
  if (!(arg instanceof like_pb.GetOldestLikeReq)) {
    throw new Error('Expected argument of type pb.GetOldestLikeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetOldestLikeReq(buffer_arg) {
  return like_pb.GetOldestLikeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetOldestLikeRes(arg) {
  if (!(arg instanceof like_pb.GetOldestLikeRes)) {
    throw new Error('Expected argument of type pb.GetOldestLikeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetOldestLikeRes(buffer_arg) {
  return like_pb.GetOldestLikeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SkipLikeReq(arg) {
  if (!(arg instanceof like_pb.SkipLikeReq)) {
    throw new Error('Expected argument of type pb.SkipLikeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SkipLikeReq(buffer_arg) {
  return like_pb.SkipLikeReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var LikeServiceService = exports.LikeServiceService = {
  createLike: {
    path: '/pb.LikeService/CreateLike',
    requestStream: false,
    responseStream: false,
    requestType: like_pb.CreateLikeReq,
    responseType: like_pb.CreateLikeRes,
    requestSerialize: serialize_pb_CreateLikeReq,
    requestDeserialize: deserialize_pb_CreateLikeReq,
    responseSerialize: serialize_pb_CreateLikeRes,
    responseDeserialize: deserialize_pb_CreateLikeRes,
  },
  getOldestLike: {
    path: '/pb.LikeService/GetOldestLike',
    requestStream: false,
    responseStream: false,
    requestType: like_pb.GetOldestLikeReq,
    responseType: like_pb.GetOldestLikeRes,
    requestSerialize: serialize_pb_GetOldestLikeReq,
    requestDeserialize: deserialize_pb_GetOldestLikeReq,
    responseSerialize: serialize_pb_GetOldestLikeRes,
    responseDeserialize: deserialize_pb_GetOldestLikeRes,
  },
  skipLike: {
    path: '/pb.LikeService/SkipLike',
    requestStream: false,
    responseStream: false,
    requestType: like_pb.SkipLikeReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_pb_SkipLikeReq,
    requestDeserialize: deserialize_pb_SkipLikeReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  consentLike: {
    path: '/pb.LikeService/ConsentLike',
    requestStream: false,
    responseStream: false,
    requestType: like_pb.ConsentLikeReq,
    responseType: like_pb.ConsentLikeRes,
    requestSerialize: serialize_pb_ConsentLikeReq,
    requestDeserialize: deserialize_pb_ConsentLikeReq,
    responseSerialize: serialize_pb_ConsentLikeRes,
    responseDeserialize: deserialize_pb_ConsentLikeRes,
  },
};

exports.LikeServiceClient = grpc.makeGenericClientConstructor(LikeServiceService);
