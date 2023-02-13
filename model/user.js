import { Schema, models, model } from 'mongoose'

const userSchema = new Schema({
    name: String,
    nim: Number,
    date: String,
    time: String,
    agenda: String,
})

const Users = models.user || model('user', userSchema)
export default Users