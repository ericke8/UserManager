const UserRoles = {
  Admin: "Admin",
  Common: "Common",
};

const CommonPermissions = ["ViewSelf"];

const AdminPermissions = [
  "UserManagement",
  "ViewAll",
  ...CommonPermissions,
];

const RolePermissions = {
  Admin: AdminPermissions,
  Common: CommonPermissions,
};

module.exports = {
  UserRoles,
  RolePermissions,
};