// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var room_pb = require('./room_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_GetRoomsReq(arg) {
  if (!(arg instanceof room_pb.GetRoomsReq)) {
    throw new Error('Expected argument of type pb.GetRoomsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetRoomsReq(buffer_arg) {
  return room_pb.GetRoomsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetRoomsRes(arg) {
  if (!(arg instanceof room_pb.GetRoomsRes)) {
    throw new Error('Expected argument of type pb.GetRoomsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetRoomsRes(buffer_arg) {
  return room_pb.GetRoomsRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoomServiceService = exports.RoomServiceService = {
  getRooms: {
    path: '/pb.RoomService/GetRooms',
    requestStream: false,
    responseStream: false,
    requestType: room_pb.GetRoomsReq,
    responseType: room_pb.GetRoomsRes,
    requestSerialize: serialize_pb_GetRoomsReq,
    requestDeserialize: deserialize_pb_GetRoomsReq,
    responseSerialize: serialize_pb_GetRoomsRes,
    responseDeserialize: deserialize_pb_GetRoomsRes,
  },
};

exports.RoomServiceClient = grpc.makeGenericClientConstructor(RoomServiceService);
