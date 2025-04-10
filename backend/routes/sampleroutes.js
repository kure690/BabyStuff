const express = require('express')
const {
    getSamples,
    getSample,
    createSample,
    deleteSample,
    updateSample
} = require('../controllers/samplecontrollers')

const router = express.Router()

//get all samples
router.get('/', getSamples)

//get a single sample
router.get('/:id', getSample)

//post a new sample
router.post('/', createSample)

//delete a sample
router.delete('/:id', deleteSample)

//update a sample
router.patch('/:id', updateSample)

module.exports = router