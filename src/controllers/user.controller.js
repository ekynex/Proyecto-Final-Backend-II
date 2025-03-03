import UserRepository from "../repositories/user.repository.js";

const userRepository = new UserRepository();

export const getUsers = async (req, res) => {
  try {
    const users = await userRepository.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userRepository.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await userRepository.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await userRepository.updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};
