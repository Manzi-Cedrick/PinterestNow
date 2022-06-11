const mongoose = require('mongoose');
const PinSchema = mongoose.Schema({
    user_pin_maker: { type: mongoose.Schema.Types.ObjectId , ref : 'User' },
    link:{type:String ,required:true},
    title:{type:String,required:true},
    description:{type:String},
    dominant_color:{type:String},
    alt_text:{type:String},
    board_id:{type:String},
    media_source:[{
        source_type:{type:String},
        content_type:{type:String},
        data :{type:String}
    }]
})
const PinData = mongoose.model('PinData',PinSchema);
module.exports = PinData;
