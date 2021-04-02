export enum UserRole {
  User = 'User',
  Admin = 'Admin',
}
export enum UserStatus {
  Active = 'Active',
  Disactive = 'Disactive',
}
export enum UserTimeType {
  PartTime = 'Part-time',
  FullTime = 'Full-time',
}
export default {
  userRoleEnum: UserRole,
  userStatusEnum: UserStatus,
  userTypeEnum: UserTimeType,
};
