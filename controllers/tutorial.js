import db from '../models/index.js';
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

//since we have created the schema but that schema/table doest not exist there in database.


// first a function..
// const tutorial = {
//     title:"qrgq3r",
//     description:"erbgre",
//     published:"ewrgr"
// }
// Tutorials.create(tutorial) 
