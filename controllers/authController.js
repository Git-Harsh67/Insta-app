const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.signUp = async (req, res) => {
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(422).json({
            msg: "all field required"
        })
    }

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400).json({
            msg: "this email is already exist"
        })
    }
    else {


        const securePassword = await bcrypt.hash(password, 10)
        // console.log(securePassword)

        const user = new User({
            name,
            email,
            password: securePassword,
            pic
        })

        user.save()

        res.status(200).json({
            user
        })
    }


}

exports.logIn = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(422).json({
            msg: "all field required"
        })
    }
    else {
        const userExist = await User.findOne({ email })
        if (!userExist) {
            res.status(400).json({
                msg: "this email don't exist"
            })
        }

            const hashPassword = userExist.password
            console.log(hashPassword)

            const checkingPassword = await bcrypt.compare(password, hashPassword)
            if (checkingPassword) {
                res.status(200).json({
                    name : userExist.name,
                    msg : "login successfully"
                })
                // like this you mean by by return
            } else {
                res.status(422).json({
                    msg: "User email or password is incorrect"
                })
            }
    }

}