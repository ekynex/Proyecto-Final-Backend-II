import UserRepository from "../repositories/user.repository.js";
import jwt from "jsonwebtoken";

const userRepository = new UserRepository(); 

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userRepository.getUserByEmail(email); 

            if (!user || user.password !== password) {
                return res.status(401).json({ error: "Credenciales incorrectas" });
            }

            const token = jwt.sign(
                { id: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );

            res.json({ token });
        } catch (error) {
            console.log("Error en login:", error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}

export default new AuthController();
