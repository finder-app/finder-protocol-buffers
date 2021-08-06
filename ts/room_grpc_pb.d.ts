// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: room.proto

import * as room_pb from "./room_pb";
import * as grpc from "@grpc/grpc-js";

interface IRoomServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getRooms: grpc.MethodDefinition<room_pb.GetRoomsReq, room_pb.GetRoomsRes>;
}

export const RoomServiceService: IRoomServiceService;

export interface IRoomServiceServer extends grpc.UntypedServiceImplementation {
  getRooms: grpc.handleUnaryCall<room_pb.GetRoomsReq, room_pb.GetRoomsRes>;
}

export class RoomServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getRooms(argument: room_pb.GetRoomsReq, callback: grpc.requestCallback<room_pb.GetRoomsRes>): grpc.ClientUnaryCall;
  getRooms(argument: room_pb.GetRoomsReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_pb.GetRoomsRes>): grpc.ClientUnaryCall;
  getRooms(argument: room_pb.GetRoomsReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_pb.GetRoomsRes>): grpc.ClientUnaryCall;
}
