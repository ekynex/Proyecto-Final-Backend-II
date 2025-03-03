import UserDAO from "../DAO/classes/users.dao.js";
import UsersModel from "../DAO/models/users.model.js";

export default class userRepository {
  constructor() {
    this.userDAO = new UserDAO();
  }

  async getUsers() {
    return await this.userDAO.getUsers();
  }

  async getUserById(id) {
    return await this.userDAO.getUserById(id);
  }

  async createUser(userData) {
    return await this.userDAO.createUser(userData);
  }

  async updateUser(id, userData) {
    return await this.userDAO.updateUser(id, userData);
  }

  async getUserByEmail(email) {
    try {
        return await UsersModel.findOne({ email });
    } catch (error) {
        console.log(error);
        return null;
    }
  }
}
