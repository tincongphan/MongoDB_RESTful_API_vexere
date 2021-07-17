const StationModel = require("../models/StationModel")

// create station 
const createStationController = async (req, res) => {
    const { name, address, province } = req.body
    try {
        const newStation = new StationModel({
            name,
            address,
            province
        })
        await newStation.save()
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get station 
const getStationController = async (req, res) => {
    try {
        const listStation = await StationModel.find()
        res.status(200).send(listStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

// station detail 
const stationDetailController = async (req, res) => {
    const { id } = req.params;
    try {
        const detailStation = await StationModel.findOne({ _id: id })
        if (detailStation) {
            res.status(200).send(detailStation)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

// update station
const updateStationController = async (req, res) => {
    const { name, address, province } = req.body;
    const { id } = req.params;
    try {
        await StationModel.findOneAndUpdate({ _id: id }, { name, address, province })
        res.status(200).send("update successfully")
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete station 
const deleteStationController = async (req, res) => {
    const { id } = req.params
    try {
        await StationModel.findOneAndDelete({ _id: id })
        res.status(200).send("delete success")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createStationController,
    getStationController,
    stationDetailController,
    updateStationController,
    deleteStationController
}