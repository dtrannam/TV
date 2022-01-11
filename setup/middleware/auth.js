const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.export = function(req, res, next) {
    const token = req.headers["x-access-token"]


    if (!token) {
        return res.status(401).json({
            msg: 'Login required'
        })
    }

    try {
        var decoded = jwt.verify(token, SECRET);
        req.user = decoded.user;
        next()
    } catch (error) {
        return res.status(401).json({
            msg: error
        })
    }
}