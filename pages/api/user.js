import jwt from "../../model/jwt";


export default (req,res)=>{
    try {
        const decoded = jwt.verify(req.body.token);
        console.log("decoded",decoded);
        return res.status(200).json({message: decoded.username})
    } catch (ex) {
        console.error(ex.message);
        return res.status(500).json({message:null})
    }
}