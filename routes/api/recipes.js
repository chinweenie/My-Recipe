const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const passport = require('passport');
const validateRecipeInput = require('../../validation/recipe');
const validateReviewInput = require('../../validation/review');

// @route   GET api/recipes (index) 
// @desc    Get recipes index
// @access  Public
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find()
            .populate('author')
            .sort({ date: -1 });

        res.json(recipes);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ 'msg': err.message });
    }
});

// @route   GET api/recipes/:recipeId (show)
// @desc    Get a recipe
// @access  Public
router.get('/:recipeId', async (req, res) => {
    try {
        const recipe = await Recipe.findById (req.params.recipeId);
        if (!recipe) return res.status(404).json({ 'msg': 'Recipe not found' });
        recipe.populate('author');
        res.json(recipe);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ 'msg': err.message });    
    }
})

// @route   POST api/recipes (create)
// @desc    Create a new recipe
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    debugger
    const { errors, isValid } = validateRecipeInput(req.body);
    if (!isValid) return res.status(422).json(errors);

    try {

        const author = req.user.id;
        const name = req.body.name;
        const steps = req.body.steps;
        const serving = req.body.serving;
        const time = req.body.time;
        const images = req.body.images || [];
        const ingredients = req.body.ingredients || [];
        const tags = req.body.tags || [];
        const nutritions = req.body.nutritions || [];
        
        const newRecipe = await new Recipe({ 
            author,
            name,
            steps,
            serving,
            time,
            usersWhoFavoritedMe: {}
        });

        
        images.forEach(image => newRecipe.images.push(image));
        
        ingredients.forEach(ingredient => newRecipe.ingredients.push(ingredient));
        
        tags.forEach(tag => newRecipe.tags.push(tag));
        
        nutritions.forEach(nutrition => newRecipe.nutritions.push(nutrition));

        const recipe = await newRecipe.save();

        res.json(recipe);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ 'msg': err.message });   
    }
})

// @route   PATCH api/recipes/:recipeId (update)
// @desc    Update a recipe
// @access  private
router.patch('/:recipeId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    debugger
    const { errors, isValid } = validateRecipeInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    debugger
    try {
        const recipe = await Recipe.findById(req.params.recipeId);

        const images = req.body.images || [];
        const ingredients = req.body.ingredients || [];
        const tags = req.body.tags || [];
        const nutritions = req.body.nutritions || [];
        
        if (!recipe) return res.status(404).json({ 'msg': 'Recipe not found' });
        if (req.body.name) recipe.name = req.body.name;
        if (req.body.steps) recipe.steps = req.body.steps;
        if (req.body.serving) recipe.serving = req.body.serving;
        if (req.body.time) recipe.time = req.body.time;
  
        images.forEach(image => recipe.images.push(image));

        ingredients.forEach(ingredient => recipe.ingredients.push(ingredient));

        tags.forEach(tag => recipe.tags.push(tag));

        nutritions.forEach(nutrition => recipe.nutritions.push(nutrition));

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ 'msg': err.message });
    };
})

// @route  DELETE api/recipes/:recipeId (delete)
// @desc   Delete a recipe
// @access Private
router.delete('/recipeId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return res.status(404).json({ 'msg': 'Story not found' });

        const deletedRecipe = await recipe.remove();
        res.json(deletedRecipe);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ 'msg': err.message });
    }
})

// @route  PATCH api/recipes/favorite/:recipeId (update)
// @desc   Favorite a recipe
// @access Private
router.patch('/favorite/:recipeId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        debugger
        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return res.status(404).json({ 'msg': 'Recipe not found' });

        const users = recipe.usersWhoFavoritedMe;
        const user = users.get(req.user.id);
        
        if (user){
            users.delete(req.user.id);
        } else {
            users.set(req.user.id, true);
        }

        await recipe.save();

        res.json(recipe.usersWhoFavoritedMe);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ 'msg': err.message });
    }
})


// @route  POST api/recipes/review/:recipeId (create)
// @desc   Add a review to the recipe
// @access Private
router.post('/reviews/:recipeId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);

    if (!isValid) {
        return res.status(422).json(errors);
    }

    try {

        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return res.status(404).json({ 'msg': 'Recipe not found' });
        
        recipe.reviews.unshift(req.body.review);
        await recipe.save();
        res.json(recipe.reviews);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ 'msg': err.message });
    }
});


module.exports = router;