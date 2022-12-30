const mongoose = require("mongoose")

const ResultSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: "User", default: null, require: [true, "please add created by"]},
    marks:{type:Number, default:0},
    isActive: { type: Boolean, default: true},
    isDeleted: { type: Boolean, default: false},
    addedOn: { type: Number, default: Date.now()},
    updatedOn: { type: Number, default: Date.now()}
})

module.exports = mongoose.models.Result || mongoose.model('Result', ResultSchema)