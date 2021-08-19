let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// inventory Model
let inventorySchema = require('../models/Inventory');

// CREATE inventory item
router.route('/create-inventory').post((req, res, next) => {
  inventorySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ User
router.route('/').get((req, res) => {
  inventorySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get and edit Single User users/:id
router.route('/edit-inventory/:id').get((req, res) => {
  inventorySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update User
router.route('/update-inventory/:id').put((req, res, next) => {
  inventorySchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})

// Delete User
router.route('/delete-inventory/:id').delete((req, res, next) => {
  inventorySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;