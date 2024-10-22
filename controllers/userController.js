const User = require("../Models/UserModel");




const Registerhandler = async (req, res) => {

    try {
        console.log("I am in RegisterHandler page");
        res.json({ message: "I am in RegisterHandler page" });

    }
    catch (error) {

        res.json({ message: "something went wrong" });
    }
}

const loginhandler = async (req, res) => {
    try {
        res.json({ message: "I am in LoginHandler page" });
        console.log("I am in LoginHandler page");

    }
    catch (error) {
        console.log(error);
        res.json({ message: "Something went wrong" });
    }
}


module.exports = { Registerhandler, loginhandler }