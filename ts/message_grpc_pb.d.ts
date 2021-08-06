// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: message.proto

import * as message_pb from "./message_pb";
import * as grpc from "@grpc/grpc-js";

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMessages: grpc.MethodDefinition<message_pb.GetMessagesReq, message_pb.GetMessagesRes>;
}

export const MessageServiceService: IMessageServiceService;

export interface IMessageServiceServer extends grpc.UntypedServiceImplementation {
  getMessages: grpc.handleUnaryCall<message_pb.GetMessagesReq, message_pb.GetMessagesRes>;
}

export class MessageServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMessages(argument: message_pb.GetMessagesReq, callback: grpc.requestCallback<message_pb.GetMessagesRes>): grpc.ClientUnaryCall;
  getMessages(argument: message_pb.GetMessagesReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<message_pb.GetMessagesRes>): grpc.ClientUnaryCall;
  getMessages(argument: message_pb.GetMessagesReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<message_pb.GetMessagesRes>): grpc.ClientUnaryCall;
}
