const { authService } = require('../services');
const jwt = require('jsonwebtoken');
let refreshTokens = [];

// helper functions
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}
const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = authService.getUserByEmailAndPassword(email, password);
    if (user) {
      const access_token = generateAccessToken(user);
      const refresh_token = generateRefreshToken(user);
      refreshTokens.push(refresh_token);
      res.status(200).send(
        {
          user,
          access_token: access_token,
          refresh_token: refresh_token
        });
    } else {
      res.status(404).send('User not found!');
    }
  } else {
    res.status(400).send('Email and Password are required!');
  }
}

// Token
exports.token = (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) {
    return res.status(401).send('UNAUTHORIZE');
  }
  else {
    if(!refreshTokens.includes(refreshToken)){
      return res.status(401).send('UNAUTHORIZE');
    }
    else{
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err){
          return res.sendStatus(401)
        }
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken: accessToken })
      })
    }
  }
}

// Logout
exports.logout = (req, res) => {
  const {token} = req.params;
  refreshTokens = refreshTokens.filter(token => token !== token);
  res.status(204).send();
}