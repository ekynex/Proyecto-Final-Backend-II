import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },     
    role: {
        type: String,
        default: 'user',
        required: true
    },
    password: {
        type: String, 
        required: true
    }    
});

export default model('User', UserSchema);