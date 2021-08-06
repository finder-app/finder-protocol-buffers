// package: pb
// file: profile.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as user_pb from "./user_pb";

export class GetProfileReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileReq): GetProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileReq;
  static deserializeBinaryFromReader(message: GetProfileReq, reader: jspb.BinaryReader): GetProfileReq;
}

export namespace GetProfileReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetProfileRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRes): GetProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRes;
  static deserializeBinaryFromReader(message: GetProfileRes, reader: jspb.BinaryReader): GetProfileRes;
}

export namespace GetProfileRes {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

export class UpdateProfileReq extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileReq): UpdateProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileReq;
  static deserializeBinaryFromReader(message: UpdateProfileReq, reader: jspb.BinaryReader): UpdateProfileReq;
}

export namespace UpdateProfileReq {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

export class UpdateProfileRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRes): UpdateProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRes;
  static deserializeBinaryFromReader(message: UpdateProfileRes, reader: jspb.BinaryReader): UpdateProfileRes;
}

export namespace UpdateProfileRes {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

