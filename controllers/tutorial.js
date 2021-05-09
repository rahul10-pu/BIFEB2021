import db from '../models';
const Tutorials = db.tutorials;
const Op = db.Sequelize.Op; //
export const getAllTutorialsByTitle = (req, res)=>{
    const title = req.query.title
    var condition = title ? {title: {[Op.ilike]: `%${title}`}}: null;

    Tutorials.findAll({where : condition})
    .then(data => {
        res.send(data)
    })
    .catch(err=> {
        res.status(500).send(
            {
                message: err.message || "Some error occurred while retrieving tutorials"
            }
        )
    })
};