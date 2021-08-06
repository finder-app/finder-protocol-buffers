// package: pb
// file: user.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetUsersReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersReq): GetUsersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersReq;
  static deserializeBinaryFromReader(message: GetUsersReq, reader: jspb.BinaryReader): GetUsersReq;
}

export namespace GetUsersReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetUsersRes extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRes): GetUsersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRes;
  static deserializeBinaryFromReader(message: GetUsersRes, reader: jspb.BinaryReader): GetUsersRes;
}

export namespace GetUsersRes {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class GetUserByUidReq extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getVisitorUid(): string;
  setVisitorUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByUidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByUidReq): GetUserByUidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByUidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByUidReq;
  static deserializeBinaryFromReader(message: GetUserByUidReq, reader: jspb.BinaryReader): GetUserByUidReq;
}

export namespace GetUserByUidReq {
  export type AsObject = {
    uid: string,
    visitorUid: string,
  }
}

export class GetUserByUidRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByUidRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByUidRes): GetUserByUidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByUidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByUidRes;
  static deserializeBinaryFromReader(message: GetUserByUidRes, reader: jspb.BinaryReader): GetUserByUidRes;
}

export namespace GetUserByUidRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class CreateUserReq extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getGender(): string;
  setGender(value: string): void;

  getThumbnail(): string;
  setThumbnail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserReq): CreateUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserReq;
  static deserializeBinaryFromReader(message: CreateUserReq, reader: jspb.BinaryReader): CreateUserReq;
}

export namespace CreateUserReq {
  export type AsObject = {
    uid: string,
    email: string,
    lastName: string,
    firstName: string,
    gender: string,
    thumbnail: string,
  }
}

export class CreateUserRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRes): CreateUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRes;
  static deserializeBinaryFromReader(message: CreateUserRes, reader: jspb.BinaryReader): CreateUserRes;
}

export namespace CreateUserRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class User extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGender(): string;
  setGender(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getLiked(): boolean;
  setLiked(value: boolean): void;

  getThumbnail(): string;
  setThumbnail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    uid: string,
    email: string,
    lastName: string,
    firstName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gender: string,
    fullName: string,
    liked: boolean,
    thumbnail: string,
  }
}

