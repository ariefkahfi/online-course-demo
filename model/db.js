const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')


const adapter = new Memory()
const db = low(adapter)

db.defaults({ users: [] }).write() 

export default db