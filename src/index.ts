import express from 'express';


// initializations
const app = express();

// Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Routes

//Static Files


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})