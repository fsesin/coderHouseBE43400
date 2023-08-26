import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        index:true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        required: true
    },
    calificacion:{
        type: Number,
        required: true
    }

})


export const studentsModel = mongoose.model('Students',studentsSchema)