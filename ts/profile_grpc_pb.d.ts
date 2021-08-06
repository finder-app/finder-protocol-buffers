// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: profile.proto

import * as profile_pb from "./profile_pb";
import * as grpc from "@grpc/grpc-js";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProfile: grpc.MethodDefinition<profile_pb.GetProfileReq, profile_pb.GetProfileRes>;
  updateProfile: grpc.MethodDefinition<profile_pb.UpdateProfileReq, profile_pb.UpdateProfileRes>;
}

export const ProfileServiceService: IProfileServiceService;

export interface IProfileServiceServer extends grpc.UntypedServiceImplementation {
  getProfile: grpc.handleUnaryCall<profile_pb.GetProfileReq, profile_pb.GetProfileRes>;
  updateProfile: grpc.handleClientStreamingCall<profile_pb.UpdateProfileReq, profile_pb.UpdateProfileRes>;
}

export class ProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProfile(argument: profile_pb.GetProfileReq, callback: grpc.requestCallback<profile_pb.GetProfileRes>): grpc.ClientUnaryCall;
  getProfile(argument: profile_pb.GetProfileReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<profile_pb.GetProfileRes>): grpc.ClientUnaryCall;
  getProfile(argument: profile_pb.GetProfileReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<profile_pb.GetProfileRes>): grpc.ClientUnaryCall;
  updateProfile(callback: grpc.requestCallback<profile_pb.UpdateProfileRes>): grpc.ClientWritableStream<profile_pb.UpdateProfileReq>;
  updateProfile(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<profile_pb.UpdateProfileRes>): grpc.ClientWritableStream<profile_pb.UpdateProfileReq>;
  updateProfile(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<profile_pb.UpdateProfileRes>): grpc.ClientWritableStream<profile_pb.UpdateProfileReq>;
}
