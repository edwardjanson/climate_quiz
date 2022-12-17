const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const handleError = (err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
};

const createRouter = function(collection) {

    const router = express.Router();

    /* get all */
    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch(handleError);
    });

    /* creates an item */
    router.post('/', (req, res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then((result) => {
                res.json(result.ops[0])
            })
            .catch(handleError);
    });

    /* delete an item */
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .deleteOne({_id: ObjectID(id)})
            .then((result) => {
                res.json(result)
            })
            .catch(handleError);
    })

    /* update an item */
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
            .updateOne(
                { _id: ObjectID(id) },
                { $set: updatedData }
            )
        .then((result) => {
            res.json(result)
        })
        .catch(handleError);
    })

    return router;
}

module.exports = createRouter;