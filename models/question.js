const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: "User", default: null, require: [true, "please add created by"]},
    question1:{
        question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question2:{
        question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question3:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question4:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question5:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question6:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question7:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question8:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question9:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    question10:{
         question:{type:String, require: [true, "please add question"]},
        option:[{type:String, require: [true, "please add option"]}],
        answer:{type:String, require: [true, "please add anser"]}

    },
    isActive: { type: Boolean, default: true},
    isDeleted: { type: Boolean, default: false},
    addedOn: { type: Number, default: Date.now()},
    updatedOn: { type: Number, default: Date.now()}
})

module.exports = mongoose.models.Question || mongoose.model('Question', QuestionSchema)