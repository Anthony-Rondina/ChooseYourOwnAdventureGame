const express = require('express')
const router = express.Router()
const Clue = require('../models/Clue')



router.get('/', (req, res) => {
    const query = Clue.find({}).populate('choice1 choice2')
    query.exec((err, Clues) => {
        if (!err) {
            res.status(200).json(Clues)
        } else {
            res.status(400).json({ err: err.message })
        }
    })
})




//Create
router.post('/', async (req, res) => {
    try {
        const { body } = req
        // body.hasClue = body.hasClue === "on" ? true : false;

        const createdClue = await Clue.create(body)
        res.status(200).json({ message: "Item Created!", createdClue })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

//UPDATE
router.put("/:id", (req, res) => {
    const { body } = req
    // body.hasClue = body.hasClue === "on" ? true : false;

    Clue.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedClue) => {
        if (!err) {
            res.status(200).json(updatedClue)
        } else {
            res.status(400).json(err)
        }
    })
})

//DELETE
router.delete("/:id", (req, res) => {
    Clue.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted Clue" })
        } else {
            res.status(400).json(err)
        }
    })
})

//Show
router.get('/:id', async (req, res) => {

    const query = Clue.findById(req.params.id).populate('choice1 choice2 clue1 clue2')
    query.exec((err, foundClue) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundClue })
        } else {
            res.status(400).json({ err: error.message })
        }
    })

})

module.exports = router