// package: pb
// file: message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetMessagesReq extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesReq): GetMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesReq;
  static deserializeBinaryFromReader(message: GetMessagesReq, reader: jspb.BinaryReader): GetMessagesReq;
}

export namespace GetMessagesReq {
  export type AsObject = {
    roomId: number,
    currentUserUid: string,
  }
}

export class GetMessagesRes extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesRes): GetMessagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesRes;
  static deserializeBinaryFromReader(message: GetMessagesRes, reader: jspb.BinaryReader): GetMessagesRes;
}

export namespace GetMessagesRes {
  export type AsObject = {
    messagesList: Array<Message.AsObject>,
  }
}

export class Message extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getUserUid(): string;
  setUserUid(value: string): void;

  getText(): string;
  setText(value: string): void;

  getUnread(): boolean;
  setUnread(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: number,
    roomId: number,
    userUid: string,
    text: string,
    unread: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

