const express = require('express')
const router = express.Router()
const Card = require('../models/Card')



router.get('/', (req, res) => {
    const query = Card.find({}).populate('choice1 choice2')
    query.exec((err, cards) => {
        if (!err) {
            res.status(200).json(cards)
        } else {
            res.status(400).json({ err: err.message })
        }
    })
})

// router.get("/table", (req, res) => {
//     Card.find({}, (err, foundCards) => {
//         if (!err) {
//             const formattedData = foundCards.reduce((acc, item) => {

//                 //Object...key      If key exists       Key += item            else add key+Value
//                 acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
//                 return acc
//             }, {})
//             res.status(200).json(formattedData)
//         } else {
//             res.status(400).json(err)
//         }
//     })
// })



//Create
router.post('/', async (req, res) => {
    try {
        const { body } = req
        const createdCard = await Card.create(body)
        res.status(200).json({ message: "Item Created!", createdCard })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

//UPDATE
router.put("/:id", (req, res) => {
    const { body } = req
    Card.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedCard) => {
        if (!err) {
            res.status(200).json(updatedCard)
        } else {
            res.status(400).json(err)
        }
    })
})

//DELETE
router.delete("/:id", (req, res) => {
    Card.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted Card" })
        } else {
            res.status(400).json(err)
        }
    })
})

//Show
router.get('/:id', async (req, res) => {

    const query = Card.findById(req.params.id).populate('choice1 choice2 choice3 choice4 previousCard previousCard2 previousCard3 previousCard4 clue1 clue2 deathRoute deathRoute2 deathRoute3')
    query.exec((err, foundCard) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundCard })
        } else {
            res.status(400).json({ err: error.message })
        }
    })

})

module.exports = router