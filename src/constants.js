const UserRoles = {
  Owner: "Owner",
  Admin: "Admin",
  Moderator: "Moderator",
  Common: "Common",
};

const CommonPermissions = [
  "ViewSelf",
  "ModifySelf",
];

const ModeratorPermissions = [
  ...CommonPermissions,
];

const AdminPermissions = [
  "UserManagement",
  "ViewAll",
  ...ModeratorPermissions,
];

const OwnerPermissions = [
  "AdminManagement",
  ...AdminPermissions,
];

const RolePermissions = {
  Owner: OwnerPermissions,
  Admin: AdminPermissions,
  Moderator: ModeratorPermissions,
  Common: CommonPermissions,
};

module.exports = {
  UserRoles,
  RolePermissions,
};