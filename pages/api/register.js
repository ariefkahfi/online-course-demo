import db from "../../model/db";


export default (req,res) => {
    const {username, password} = req.body
    try {
        db.get('users')
            .push({ username, password})
            .write()
        return res.json({message:"Berhasil mendaftarkan user"})
    } catch (ex) {
        process.stderr.write(ex.message)
        return res.json({message:"Gagal mendaftarkan user"})
    }
}