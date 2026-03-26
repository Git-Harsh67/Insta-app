const mongoos = require("mongoose")

const dataBase = async () => {
    try {
        await mongoos.connect(process.env.MONGO_URL)
        console.log("dataBase is connected")
    } catch (error) {
        console.log("database not connected")
        error
    }
}

module.exports = dataBase