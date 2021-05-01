export interface IServerResponse {
  message: string;
  status: number;
  success: boolean;
}

export interface IServerResponseWithData<T> extends IServerResponse {
  data: T;
}
