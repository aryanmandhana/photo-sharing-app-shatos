const MyError = require("../model/error");
const User = require("../model/user");

const ALL_USERS = [
    {
        id: "u1",
        name: "xyz",
        email: "xyz@shatos.com",
        password: "xyz123",
    },
    {
        id: "u2",
        name: "mno",
        email: "mno@shatos.com",
        password: "mno123",
    },
]




exports.getUsers = async (req, res, nest) => {
    let all_users;
    try {
        all_users = await User.find({}, "-password")
    } catch (err) {
        return next(new MyError("Database error: cannot find user", 500))
    }
    // if(!all_users)
    res.status(200).json({ result: "sucess", message: all_users });
};

exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;
    let findUser;
    try {
        findUser = await User.findOne({ Email: email })
    } catch (err) {
        return next(new MyError("Something bad happen", 500))
    }


    // const FindUser = ALL_USERS.find((user) => {
    //     return user.email === email;

    // })
    if (FindUser) {
        return next(new MyError("Email already exsist", 422));
    }
    const newuser = {
        name,
        email,
        pic: "https://picsum.photos/200",
        password,
        locationsid: []
    }
    // id: "u" + (Math.trunc(Math.random() * 100)),
    // name, email, password
    try {
        await newuser.save();
    } catch (err) {
        return next(new MyError("Database error : cannot register", 500))
    }


    ALL_USERS.push(newuser);
    res.status(201).json({ result: "success", message: newuser })

};

exports.login = async (req, res, nest) => {
    const { email, password } = req.body;
    let findUser;
    try {
        findUser = await findOne({ Email: email });
    } catch (err) {
        return next(new MyError("Something bad happen", 500))
    }
    // const findUser = ALL_USERS.find((user)=>{
    //     return user.email ===email;

    // })
    if (!findUser || findUser.password !== password) {
        return next(new MyError("Email or Password not found", 401))
    }
    res.status(200).json({ result: "sucess", message: "logged in successfully" })
}