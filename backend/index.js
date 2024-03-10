const express = require('express');
const cors = require('cors');
require('./db/config');
const Record = require('./db/blc_datas');
const User = require('./db/blc_users');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async(req,res)=>{
    let data = await Record.find({});
    res.send(data);
});
app.post('/add-user', async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});
app.post('/login', async(req,res)=>{
    if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select('-password');
        if(user){
            res.send(user)
        }else{
            res.send(alert('User not found!'))
            }
    }else{res.send('User not found!')}
})

app.listen(8080);