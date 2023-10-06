export default class UsersDto {
  constructor(user) {
    this.name = `${user.first_name} ${user.last_name}`;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.orders = [];
  }
}
