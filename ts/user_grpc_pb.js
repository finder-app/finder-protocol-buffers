// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_CreateUserReq(arg) {
  if (!(arg instanceof user_pb.CreateUserReq)) {
    throw new Error('Expected argument of type pb.CreateUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateUserReq(buffer_arg) {
  return user_pb.CreateUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateUserRes(arg) {
  if (!(arg instanceof user_pb.CreateUserRes)) {
    throw new Error('Expected argument of type pb.CreateUserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateUserRes(buffer_arg) {
  return user_pb.CreateUserRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUserByUidReq(arg) {
  if (!(arg instanceof user_pb.GetUserByUidReq)) {
    throw new Error('Expected argument of type pb.GetUserByUidReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUserByUidReq(buffer_arg) {
  return user_pb.GetUserByUidReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUserByUidRes(arg) {
  if (!(arg instanceof user_pb.GetUserByUidRes)) {
    throw new Error('Expected argument of type pb.GetUserByUidRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUserByUidRes(buffer_arg) {
  return user_pb.GetUserByUidRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUsersReq(arg) {
  if (!(arg instanceof user_pb.GetUsersReq)) {
    throw new Error('Expected argument of type pb.GetUsersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUsersReq(buffer_arg) {
  return user_pb.GetUsersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUsersRes(arg) {
  if (!(arg instanceof user_pb.GetUsersRes)) {
    throw new Error('Expected argument of type pb.GetUsersRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUsersRes(buffer_arg) {
  return user_pb.GetUsersRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUsers: {
    path: '/pb.UserService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUsersReq,
    responseType: user_pb.GetUsersRes,
    requestSerialize: serialize_pb_GetUsersReq,
    requestDeserialize: deserialize_pb_GetUsersReq,
    responseSerialize: serialize_pb_GetUsersRes,
    responseDeserialize: deserialize_pb_GetUsersRes,
  },
  getUserByUid: {
    path: '/pb.UserService/GetUserByUid',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserByUidReq,
    responseType: user_pb.GetUserByUidRes,
    requestSerialize: serialize_pb_GetUserByUidReq,
    requestDeserialize: deserialize_pb_GetUserByUidReq,
    responseSerialize: serialize_pb_GetUserByUidRes,
    responseDeserialize: deserialize_pb_GetUserByUidRes,
  },
  createUser: {
    path: '/pb.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserReq,
    responseType: user_pb.CreateUserRes,
    requestSerialize: serialize_pb_CreateUserReq,
    requestDeserialize: deserialize_pb_CreateUserReq,
    responseSerialize: serialize_pb_CreateUserRes,
    responseDeserialize: deserialize_pb_CreateUserRes,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
