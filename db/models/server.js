const mongoose = require('mongoose')

const serverSchema = mongoose.Schema({
    serverID: String,
    serverPrefix: String,
    serverName: String,
    moderatorRoles: [],
})

module.exports = mongoose.model("Server", serverSchema)