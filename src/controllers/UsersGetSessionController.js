module.exports = async (req, res) => {
    // console.log(req.session, req.user);
    let sessions = await req.psql.sessions.findAll({
        where: {
            user_id: req.user.id
        },
        attributes: ["id", "userAgent","ipAddress","createdAt"]
    })
    sessions = await sessions.map(session => session.dataValues)
    res.json({
        ok: true,
        data: sessions
    })
}