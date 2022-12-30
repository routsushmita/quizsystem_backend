const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    phone:{type:String, default:""},
    address:{type:String, default:""},
    role:{type:String, default:""},
    sessionToken:{type:String, default:""},
    isActive: { type: Boolean, default: true},
    isDeleted: { type: Boolean, default: false},
    addedOn: { type: Number, default: Date.now()},
    updatedOn: { type: Number, default: Date.now()}
    
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)