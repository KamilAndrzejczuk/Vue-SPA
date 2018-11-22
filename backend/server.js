const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const UsersRoute = require('./routes/user');
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('connected to the database...');
});

mongoose.connection.on('error', (err) => {
    console.log(`an Error occured: ${err}`);
    
})

const port = 3200;
app.listen(port,() => {
    console.log(`server running on port: ${port}`)
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// let corsOptions = {
//     origin: function(origin, callback){
//           let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//           callback(null, isWhitelisted);
//     },
//     credentials:true
//   }

// app.use(cors(corsOptions));
app.use('/users', UsersRoute);

app.get('/',(req, res) => {

})