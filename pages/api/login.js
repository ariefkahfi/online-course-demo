// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../model/db"
import jwt from "../../model/jwt"



export default (req, res) => {
  try {
    const {username, password} = req.body
    const val = db.get("users").find({
      username,
      password
    }).value()
    console.log("val",val)
    if(!val) { 
      throw new Error("Tidak ada user")
    }

    const token = jwt.sign(username)
    return res.json({message: token , username})
  } catch (ex) {
    console.error(ex.message)
    return res.status(500).json({message: "Gagal login"})
  }
}
