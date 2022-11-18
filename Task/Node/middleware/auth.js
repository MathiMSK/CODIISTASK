import jwt from "jsonwebtoken";

function auth(req,res,next){
    
    if
        (req.headers.authorization 
             ||
        null
    ) {
        const jwtToken = req.headers.authorization.substring(
            7,
            req.headers.authorization.length
        );

        if (!jwtToken) {
            return res
                .status(403)
                .json("Not Authorized (authorization not jwt Token)");
        } else {
            const payload = jwt.verify(jwtToken, process.env.JWT_KEY);
            req.user = payload;
            next();
         
            console.log("authorized user");
        }
        
    } else {
        res.status(404).send({ msg: "Unauthorized user" });
    }
};

export default auth