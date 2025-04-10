const Sample = require('../models/samplemodel')

// Get all samples
const getSamples = async (req, res) => {
    try {
        const samples = await Sample.find({}).sort({createdAt: -1})
        res.status(200).json(samples)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get a single sample
const getSample = async (req, res) => {
    const { id } = req.params

    try {
        const sample = await Sample.findById(id)
        if (!sample) {
            return res.status(404).json({error: 'No such sample found'})
        }
        res.status(200).json(sample)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Create a new sample
const createSample = async (req, res) => {
    const {title, count} = req.body

    try {
        const sample = await Sample.create({title, count})
        res.status(200).json(sample)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a sample
const deleteSample = async (req, res) => {
    const { id } = req.params

    try {
        const sample = await Sample.findByIdAndDelete(id)
        if (!sample) {
            return res.status(404).json({error: 'No such sample found'})
        }
        res.status(200).json(sample)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Update a sample
const updateSample = async (req, res) => {
    const { id } = req.params

    try {
        const sample = await Sample.findByIdAndUpdate(id, {...req.body}, {new: true})
        if (!sample) {
            return res.status(404).json({error: 'No such sample found'})
        }
        res.status(200).json(sample)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getSamples,
    getSample,
    createSample,
    deleteSample,
    updateSample
}
