const Items = require('../models/Item');


const getallItems = async (req, res) => {
    try {
        const items = await Items.find({});
        res.status(200).json({ items });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addItem = async (req, res) => {
    try {
        const item = await Items.create(req.body);
        res.status(200).json({ message: "item added " + item });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingleItem = async (req, res) => {
    try {
        const idItem = await Items.findById(req.params.id);
        res.status(200).json({ idItem });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateItem = async (req, res) => {
    try {
        const item = await Items.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json({ message:"item updated "});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteItem = async (req, res) => {
    try {
        const item = await Items.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'deleted item is'+item });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getallItems, addItem, getSingleItem, updateItem, deleteItem };