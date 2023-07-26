const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');

//routes 
const userRoutes = require('./routes/user');

// environment variable or you can say constants
env.config({path:__dirname+'/.env'});
console.log(process.env.PORT)

//mongodb connection
// mongodb+srv://mongodb:<password>@cluster0.8jglmto.mongodb.net/?retryWrites=true&w=majority

mongoose.connect( `mongodb+srv://mongodb:Bechir2000@cluster0.8jglmto.mongodb.net/mern-ecommerce?retryWrites=true&w=majority`,)
.then(() => console.log("connected Database")).catch((err) => console.log(err)),
{
    useNewUrlParser: true,
    useUndifiedTopology: true,
    useCreateIndex: true
}




app.use(bodyParser());
app.use('/api', userRoutes);





app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});




