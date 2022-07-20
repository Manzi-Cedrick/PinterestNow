const mongoose = require('mongoose');
const PinSchema = mongoose.Schema({
    user_pin_maker: { type: mongoose.Schema.Types.ObjectId , ref : 'User' },
    link: [{type:Object,required:true,unique:true}],
    title:{type:String,default:"cedrick Pin Posting"},
    description:{type:String,default:"cedrick Pin Posting"},
    dominant_color:{type:String},
    // id:{type:String,unique:false},
    alt_text:{type:String,default:"cedrick Pin Posting"},
    board_id:{type:String,default:""},
})
const PinData = mongoose.model('PinData',PinSchema);
module.exports = PinData;
