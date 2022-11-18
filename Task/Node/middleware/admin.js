function admin(req,res,next){
    if (req.adimin.isAdmin === false) return res.status(403).send("access denied");
    console.log(admin);
  if (!req.user.isAdmin === false) {
    next();
  }
    
}
export default admin;