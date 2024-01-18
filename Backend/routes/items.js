const express = require('express');
const router = express.Router();
const {getallItems,getSingleItem,updateItem,deleteItem,addItem} = require('../controllers/items');



router.route('/').get(getallItems).post(addItem);

router.route('/:id').get(getSingleItem).patch(updateItem).delete(deleteItem);

module.exports = router;
