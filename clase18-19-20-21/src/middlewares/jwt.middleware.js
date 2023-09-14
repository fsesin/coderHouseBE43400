import jwt from "jsonwebtoken";
const JWT_SECRET_KEY = "secretJWT";

// sin cookies
// export const jwtValidation = (req,res,next)=>{
// try {
//     const authHeader = req.get('Authorization')
//     const token = authHeader.split(' ')[1]
//     const response = jwt.verify(token,JWT_SECRET_KEY)
//     req.user = response.user
//     next()

// } catch (error) {
//     res.status(500).json({message:error})
// }
// }

//con cookies
export const jwtValidation = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const response = jwt.verify(token, JWT_SECRET_KEY);
    req.user = response.user;
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
