import UsersModel from "../models/users.model.js";
import UserDTO from "../DTOs/user.dto.js";

export default class User {
  getUsers = async () => {
    try {
      const users = await UsersModel.find();
      return users.map(user => new UserDTO(user)); // ⬅️ Se filtran los datos antes de enviarlos
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getUserById = async (id) => {
    try {
      const user = await UsersModel.findOne({ _id: id });
      return user ? new UserDTO(user) : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createUser = async (user) => {
    try {
      return await UsersModel.create(user);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  updateUser = async (id, user) => {
    try {
      return await UsersModel.updateOne({ _id: id }, { $set: user });
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
