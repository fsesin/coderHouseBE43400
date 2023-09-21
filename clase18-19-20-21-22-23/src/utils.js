import {dirname}from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET_KEY = 'secretJWT'

export const __dirname = dirname(fileURLToPath(import.meta.url))

export const hashData = async(data)=>{
    return bcrypt.hash(data,10)
}

export const compareData = async(data,hashData)=>{
    return bcrypt.compare(data,hashData)
}

export const generateToken = (user)=>{
    const token = jwt.sign({user},JWT_SECRET_KEY,{expiresIn: 60})
    return token
}

