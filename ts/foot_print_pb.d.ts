// package: pb
// file: foot_print.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as user_pb from "./user_pb";

export class GetFootPrintsReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFootPrintsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFootPrintsReq): GetFootPrintsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFootPrintsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFootPrintsReq;
  static deserializeBinaryFromReader(message: GetFootPrintsReq, reader: jspb.BinaryReader): GetFootPrintsReq;
}

export namespace GetFootPrintsReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetFootPrintsRes extends jspb.Message {
  clearFootPrintsList(): void;
  getFootPrintsList(): Array<FootPrint>;
  setFootPrintsList(value: Array<FootPrint>): void;
  addFootPrints(value?: FootPrint, index?: number): FootPrint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFootPrintsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetFootPrintsRes): GetFootPrintsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFootPrintsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFootPrintsRes;
  static deserializeBinaryFromReader(message: GetFootPrintsRes, reader: jspb.BinaryReader): GetFootPrintsRes;
}

export namespace GetFootPrintsRes {
  export type AsObject = {
    footPrintsList: Array<FootPrint.AsObject>,
  }
}

export class GetUnreadCountReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadCountReq): GetUnreadCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnreadCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadCountReq;
  static deserializeBinaryFromReader(message: GetUnreadCountReq, reader: jspb.BinaryReader): GetUnreadCountReq;
}

export namespace GetUnreadCountReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetUnreadCountRes extends jspb.Message {
  getUnreadCount(): number;
  setUnreadCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadCountRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadCountRes): GetUnreadCountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnreadCountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadCountRes;
  static deserializeBinaryFromReader(message: GetUnreadCountRes, reader: jspb.BinaryReader): GetUnreadCountRes;
}

export namespace GetUnreadCountRes {
  export type AsObject = {
    unreadCount: number,
  }
}

export class FootPrint extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getVisitorUid(): string;
  setVisitorUid(value: string): void;

  hasVisitor(): boolean;
  clearVisitor(): void;
  getVisitor(): user_pb.User | undefined;
  setVisitor(value?: user_pb.User): void;

  getUesrUid(): string;
  setUesrUid(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUnread(): boolean;
  setUnread(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FootPrint.AsObject;
  static toObject(includeInstance: boolean, msg: FootPrint): FootPrint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FootPrint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FootPrint;
  static deserializeBinaryFromReader(message: FootPrint, reader: jspb.BinaryReader): FootPrint;
}

export namespace FootPrint {
  export type AsObject = {
    id: number,
    visitorUid: string,
    visitor?: user_pb.User.AsObject,
    uesrUid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    unread: boolean,
  }
}

