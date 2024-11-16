const express = require('express');
const router = express.Router();

const foodCategory = require('../models/food.category.model.js');
const foodData = require('../models/food.Data.model.js');
const restaurantData = require('../models/restaurant.data.model.js');




router.get('/foodData', (req, res) => {

    foodData.find()
        .populate('restaurantData, foodData, foodOptions')
        .then((allFoodData) => {
            res.json(allFoodData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/foodData', async (req, res) => {
    try{
        const createdFoodData = await foodData.create(req.body);

        await updatedFoodData.findByIdAndUpdate(req.body.foodData, {foodData: createdFoodData._id})
        res.json(createdFoodData);
    }
    catch(err){
        res.status(500).json(err);
    }
});


router.get('/foodData/:id', (req, res) => {

    foodData.findById(req.params.id)
        .populate('restaurantData , foodData , foodOptions')
        .then((foundFoodData) => {
            res.json(foundFoodData)
        })

        .catch((err) => {
            res.status(500).json(err);
        })
});

router.put('/foodData/:id', (req, res) => {
    foodData.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedFoodData) => {
            res.json(updatedFoodData)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

});

router.delete('/foodData/:id', (req, res) => {
    foodData.findByIdAndDelete(req.params.id)
        .then((deletedFoodData) => {
            res.json(deletedFoodData)
        })
        .catch((err) => {
            res.json(err)
        })

});

router.get('/foodCategory/:category', (req, res) => {

    foodData.findById({category:req.params.category})
        .then((foundFoodData) => {
            res.json(foundFoodData)
        })

        .catch((err) => {
            res.status(500).json(err);
        })

    });

    router.get('/retaurantData/:retaurantName', (req, res) => {

        foodData.findById({retaurantName:req.params.retaurantName})
            .then((foundFoodData) => {
                res.json(foundFoodData)
            })
    
            .catch((err) => {
                res.status(500).json(err);
            })
    
        });
    


module.exports = router;