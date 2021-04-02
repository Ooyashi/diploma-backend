export type idParam = {
  id: string;
};
export type refreshTokenParam = {
  refresh_token: string;
};
type authorizationControllerParams = idParam & refreshTokenParam;

export default authorizationControllerParams;
