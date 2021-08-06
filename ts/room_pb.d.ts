// package: pb
// file: room.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetRoomsReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsReq): GetRoomsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsReq;
  static deserializeBinaryFromReader(message: GetRoomsReq, reader: jspb.BinaryReader): GetRoomsReq;
}

export namespace GetRoomsReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetRoomsRes extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<Room>;
  setRoomsList(value: Array<Room>): void;
  addRooms(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsRes): GetRoomsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsRes;
  static deserializeBinaryFromReader(message: GetRoomsRes, reader: jspb.BinaryReader): GetRoomsRes;
}

export namespace GetRoomsRes {
  export type AsObject = {
    roomsList: Array<Room.AsObject>,
  }
}

export class Room extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

