// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: like.proto

import * as like_pb from "./like_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface ILikeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createLike: grpc.MethodDefinition<like_pb.CreateLikeReq, like_pb.CreateLikeRes>;
  getOldestLike: grpc.MethodDefinition<like_pb.GetOldestLikeReq, like_pb.GetOldestLikeRes>;
  skipLike: grpc.MethodDefinition<like_pb.SkipLikeReq, google_protobuf_empty_pb.Empty>;
  consentLike: grpc.MethodDefinition<like_pb.ConsentLikeReq, like_pb.ConsentLikeRes>;
}

export const LikeServiceService: ILikeServiceService;

export interface ILikeServiceServer extends grpc.UntypedServiceImplementation {
  createLike: grpc.handleUnaryCall<like_pb.CreateLikeReq, like_pb.CreateLikeRes>;
  getOldestLike: grpc.handleUnaryCall<like_pb.GetOldestLikeReq, like_pb.GetOldestLikeRes>;
  skipLike: grpc.handleUnaryCall<like_pb.SkipLikeReq, google_protobuf_empty_pb.Empty>;
  consentLike: grpc.handleUnaryCall<like_pb.ConsentLikeReq, like_pb.ConsentLikeRes>;
}

export class LikeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createLike(argument: like_pb.CreateLikeReq, callback: grpc.requestCallback<like_pb.CreateLikeRes>): grpc.ClientUnaryCall;
  createLike(argument: like_pb.CreateLikeReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.CreateLikeRes>): grpc.ClientUnaryCall;
  createLike(argument: like_pb.CreateLikeReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.CreateLikeRes>): grpc.ClientUnaryCall;
  getOldestLike(argument: like_pb.GetOldestLikeReq, callback: grpc.requestCallback<like_pb.GetOldestLikeRes>): grpc.ClientUnaryCall;
  getOldestLike(argument: like_pb.GetOldestLikeReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.GetOldestLikeRes>): grpc.ClientUnaryCall;
  getOldestLike(argument: like_pb.GetOldestLikeReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.GetOldestLikeRes>): grpc.ClientUnaryCall;
  skipLike(argument: like_pb.SkipLikeReq, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  skipLike(argument: like_pb.SkipLikeReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  skipLike(argument: like_pb.SkipLikeReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  consentLike(argument: like_pb.ConsentLikeReq, callback: grpc.requestCallback<like_pb.ConsentLikeRes>): grpc.ClientUnaryCall;
  consentLike(argument: like_pb.ConsentLikeReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.ConsentLikeRes>): grpc.ClientUnaryCall;
  consentLike(argument: like_pb.ConsentLikeReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.ConsentLikeRes>): grpc.ClientUnaryCall;
}
