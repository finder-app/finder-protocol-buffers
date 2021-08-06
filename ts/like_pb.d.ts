// package: pb
// file: like.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";
import * as room_pb from "./room_pb";

export class CreateLikeReq extends jspb.Message {
  getSentUserUid(): string;
  setSentUserUid(value: string): void;

  getRecievedUserUid(): string;
  setRecievedUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLikeReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLikeReq): CreateLikeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLikeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLikeReq;
  static deserializeBinaryFromReader(message: CreateLikeReq, reader: jspb.BinaryReader): CreateLikeReq;
}

export namespace CreateLikeReq {
  export type AsObject = {
    sentUserUid: string,
    recievedUserUid: string,
  }
}

export class CreateLikeRes extends jspb.Message {
  hasLike(): boolean;
  clearLike(): void;
  getLike(): Like | undefined;
  setLike(value?: Like): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLikeRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLikeRes): CreateLikeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLikeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLikeRes;
  static deserializeBinaryFromReader(message: CreateLikeRes, reader: jspb.BinaryReader): CreateLikeRes;
}

export namespace CreateLikeRes {
  export type AsObject = {
    like?: Like.AsObject,
  }
}

export class GetOldestLikeReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOldestLikeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOldestLikeReq): GetOldestLikeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOldestLikeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOldestLikeReq;
  static deserializeBinaryFromReader(message: GetOldestLikeReq, reader: jspb.BinaryReader): GetOldestLikeReq;
}

export namespace GetOldestLikeReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetOldestLikeRes extends jspb.Message {
  hasLike(): boolean;
  clearLike(): void;
  getLike(): Like | undefined;
  setLike(value?: Like): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOldestLikeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetOldestLikeRes): GetOldestLikeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOldestLikeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOldestLikeRes;
  static deserializeBinaryFromReader(message: GetOldestLikeRes, reader: jspb.BinaryReader): GetOldestLikeRes;
}

export namespace GetOldestLikeRes {
  export type AsObject = {
    like?: Like.AsObject,
  }
}

export class SkipLikeReq extends jspb.Message {
  getSentUserUid(): string;
  setSentUserUid(value: string): void;

  getRecievedUserUid(): string;
  setRecievedUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkipLikeReq.AsObject;
  static toObject(includeInstance: boolean, msg: SkipLikeReq): SkipLikeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkipLikeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkipLikeReq;
  static deserializeBinaryFromReader(message: SkipLikeReq, reader: jspb.BinaryReader): SkipLikeReq;
}

export namespace SkipLikeReq {
  export type AsObject = {
    sentUserUid: string,
    recievedUserUid: string,
  }
}

export class ConsentLikeReq extends jspb.Message {
  getSentUserUid(): string;
  setSentUserUid(value: string): void;

  getRecievedUserUid(): string;
  setRecievedUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentLikeReq.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentLikeReq): ConsentLikeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentLikeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentLikeReq;
  static deserializeBinaryFromReader(message: ConsentLikeReq, reader: jspb.BinaryReader): ConsentLikeReq;
}

export namespace ConsentLikeReq {
  export type AsObject = {
    sentUserUid: string,
    recievedUserUid: string,
  }
}

export class ConsentLikeRes extends jspb.Message {
  hasLike(): boolean;
  clearLike(): void;
  getLike(): Like | undefined;
  setLike(value?: Like): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): room_pb.Room | undefined;
  setRoom(value?: room_pb.Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentLikeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentLikeRes): ConsentLikeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentLikeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentLikeRes;
  static deserializeBinaryFromReader(message: ConsentLikeRes, reader: jspb.BinaryReader): ConsentLikeRes;
}

export namespace ConsentLikeRes {
  export type AsObject = {
    like?: Like.AsObject,
    room?: room_pb.Room.AsObject,
  }
}

export class Like extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSentUserUid(): string;
  setSentUserUid(value: string): void;

  hasSentUser(): boolean;
  clearSentUser(): void;
  getSentUser(): user_pb.User | undefined;
  setSentUser(value?: user_pb.User): void;

  getRecievedUserUid(): string;
  setRecievedUserUid(value: string): void;

  getSkipped(): boolean;
  setSkipped(value: boolean): void;

  getConsented(): boolean;
  setConsented(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Like.AsObject;
  static toObject(includeInstance: boolean, msg: Like): Like.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Like, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Like;
  static deserializeBinaryFromReader(message: Like, reader: jspb.BinaryReader): Like;
}

export namespace Like {
  export type AsObject = {
    id: number,
    sentUserUid: string,
    sentUser?: user_pb.User.AsObject,
    recievedUserUid: string,
    skipped: boolean,
    consented: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

