const User = require('../models/user');

module.exports.home = (req,res)=>{
    res.render("index");
}

module.exports.contact = (req,res)=>{
    res.render("contact");
}

module.exports.about = (req,res)=>{
    res.render("about");
}

module.exports.signup_get = (req,res)=>{
    res.render("signup");
}

module.exports.signup_post = async (req,res)=>{
    const {email,password} = req.body;
    
    try{
        const user = await User.create({email,password});
        res.status(201).json(user);
    }
    catch(err){
        console.log(err);
        res.status(400).send('Error, on creating user');
    }
    
}

module.exports.login_get = (req,res)=>{
    res.render("login");
}

module.exports.login_post = (req,res)=>{
    res.send("login");
}
