const express = require('express');
const app = express();
const bodyparser=  require("body-parser");
const dotenv = require('dotenv');
const AuthRoutes = require('./routes/AuthRoutes');
const PinRouter = require('./routes/PinRouter');
const ConvoRoute = require('./routes/ChatRoutes');
const MessageRoute = require('./routes/MessageRoutes');
const connectionEstablish = require('./utilities/dbconnection');
dotenv.config();
connectionEstablish();
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/v1/auth/user',AuthRoutes);
app.use('/v1/board/pin',PinRouter);
app.use('/v1/convo/chat',ConvoRoute);
app.use('/v1/convo/message',MessageRoute);
const port = process.env.PORT || 8080;
app.listen(process.env.PORT,()=>{
    console.log(`listening on port accessible ${port}`)
})