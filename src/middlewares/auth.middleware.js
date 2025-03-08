import jwt from "jsonwebtoken";

export const authorizeRole = (roles) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      console.log("Headers: ", req.headers);
      console.log("Authorization Header: ", req.headers.authorization);

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Usuario no autenticado" });
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; 

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: "No tienes permisos para realizar esta acción" });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: "Error en la autorización" });
    }
  };
};
