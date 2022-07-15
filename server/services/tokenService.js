const jwt = require("jsonwebtoken");

const tokenService = {
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "365d" }
    );
  },
}

module.exports = tokenService;