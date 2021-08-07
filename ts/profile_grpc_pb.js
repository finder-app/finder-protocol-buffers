// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var profile_pb = require('./profile_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var user_pb = require('./user_pb.js');

function serialize_pb_GetProfileReq(arg) {
  if (!(arg instanceof profile_pb.GetProfileReq)) {
    throw new Error('Expected argument of type pb.GetProfileReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetProfileReq(buffer_arg) {
  return profile_pb.GetProfileReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetProfileRes(arg) {
  if (!(arg instanceof profile_pb.GetProfileRes)) {
    throw new Error('Expected argument of type pb.GetProfileRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetProfileRes(buffer_arg) {
  return profile_pb.GetProfileRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UpdateProfileReq(arg) {
  if (!(arg instanceof profile_pb.UpdateProfileReq)) {
    throw new Error('Expected argument of type pb.UpdateProfileReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UpdateProfileReq(buffer_arg) {
  return profile_pb.UpdateProfileReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UpdateProfileRes(arg) {
  if (!(arg instanceof profile_pb.UpdateProfileRes)) {
    throw new Error('Expected argument of type pb.UpdateProfileRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UpdateProfileRes(buffer_arg) {
  return profile_pb.UpdateProfileRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProfileServiceService = exports.ProfileServiceService = {
  getProfile: {
    path: '/pb.ProfileService/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: profile_pb.GetProfileReq,
    responseType: profile_pb.GetProfileRes,
    requestSerialize: serialize_pb_GetProfileReq,
    requestDeserialize: deserialize_pb_GetProfileReq,
    responseSerialize: serialize_pb_GetProfileRes,
    responseDeserialize: deserialize_pb_GetProfileRes,
  },
  updateProfile: {
    path: '/pb.ProfileService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: profile_pb.UpdateProfileReq,
    responseType: profile_pb.UpdateProfileRes,
    requestSerialize: serialize_pb_UpdateProfileReq,
    requestDeserialize: deserialize_pb_UpdateProfileReq,
    responseSerialize: serialize_pb_UpdateProfileRes,
    responseDeserialize: deserialize_pb_UpdateProfileRes,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService);
