export default class UsersDTO {
  constructor(obj) {
    (this.first_name = obj.full_name.split(" ")[0]),
      (this.last_name = obj.full_name.split(" ")[1] || ""),
      (this.emailUser = obj.email),
      (this.idUser = obj._id);
  }
}
