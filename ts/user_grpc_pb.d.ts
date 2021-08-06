// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: user.proto

import * as user_pb from "./user_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUsers: grpc.MethodDefinition<user_pb.GetUsersReq, user_pb.GetUsersRes>;
  getUserByUid: grpc.MethodDefinition<user_pb.GetUserByUidReq, user_pb.GetUserByUidRes>;
  createUser: grpc.MethodDefinition<user_pb.CreateUserReq, user_pb.CreateUserRes>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
  getUsers: grpc.handleUnaryCall<user_pb.GetUsersReq, user_pb.GetUsersRes>;
  getUserByUid: grpc.handleUnaryCall<user_pb.GetUserByUidReq, user_pb.GetUserByUidRes>;
  createUser: grpc.handleUnaryCall<user_pb.CreateUserReq, user_pb.CreateUserRes>;
}

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUsers(argument: user_pb.GetUsersReq, callback: grpc.requestCallback<user_pb.GetUsersRes>): grpc.ClientUnaryCall;
  getUsers(argument: user_pb.GetUsersReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUsersRes>): grpc.ClientUnaryCall;
  getUsers(argument: user_pb.GetUsersReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUsersRes>): grpc.ClientUnaryCall;
  getUserByUid(argument: user_pb.GetUserByUidReq, callback: grpc.requestCallback<user_pb.GetUserByUidRes>): grpc.ClientUnaryCall;
  getUserByUid(argument: user_pb.GetUserByUidReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUserByUidRes>): grpc.ClientUnaryCall;
  getUserByUid(argument: user_pb.GetUserByUidReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUserByUidRes>): grpc.ClientUnaryCall;
  createUser(argument: user_pb.CreateUserReq, callback: grpc.requestCallback<user_pb.CreateUserRes>): grpc.ClientUnaryCall;
  createUser(argument: user_pb.CreateUserReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.CreateUserRes>): grpc.ClientUnaryCall;
  createUser(argument: user_pb.CreateUserReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.CreateUserRes>): grpc.ClientUnaryCall;
}
