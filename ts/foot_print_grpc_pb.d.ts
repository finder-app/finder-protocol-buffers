// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: foot_print.proto

import * as foot_print_pb from "./foot_print_pb";
import * as grpc from "@grpc/grpc-js";

interface IFootPrintServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFootPrints: grpc.MethodDefinition<foot_print_pb.GetFootPrintsReq, foot_print_pb.GetFootPrintsRes>;
  getUnreadCount: grpc.MethodDefinition<foot_print_pb.GetUnreadCountReq, foot_print_pb.GetUnreadCountRes>;
}

export const FootPrintServiceService: IFootPrintServiceService;

export interface IFootPrintServiceServer extends grpc.UntypedServiceImplementation {
  getFootPrints: grpc.handleUnaryCall<foot_print_pb.GetFootPrintsReq, foot_print_pb.GetFootPrintsRes>;
  getUnreadCount: grpc.handleUnaryCall<foot_print_pb.GetUnreadCountReq, foot_print_pb.GetUnreadCountRes>;
}

export class FootPrintServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFootPrints(argument: foot_print_pb.GetFootPrintsReq, callback: grpc.requestCallback<foot_print_pb.GetFootPrintsRes>): grpc.ClientUnaryCall;
  getFootPrints(argument: foot_print_pb.GetFootPrintsReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<foot_print_pb.GetFootPrintsRes>): grpc.ClientUnaryCall;
  getFootPrints(argument: foot_print_pb.GetFootPrintsReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<foot_print_pb.GetFootPrintsRes>): grpc.ClientUnaryCall;
  getUnreadCount(argument: foot_print_pb.GetUnreadCountReq, callback: grpc.requestCallback<foot_print_pb.GetUnreadCountRes>): grpc.ClientUnaryCall;
  getUnreadCount(argument: foot_print_pb.GetUnreadCountReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<foot_print_pb.GetUnreadCountRes>): grpc.ClientUnaryCall;
  getUnreadCount(argument: foot_print_pb.GetUnreadCountReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<foot_print_pb.GetUnreadCountRes>): grpc.ClientUnaryCall;
}
