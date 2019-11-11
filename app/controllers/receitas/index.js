const express = require ('express');
const router = express.Router();
const saveRecipe = require("./functions/saveRecipe");
const updateRecipe = require("./functions/updateRecipe");
const getRecipe = require("./functions/getRecipe");
const deleteRecipe = require("./functions/deleteRecipe");

//save recipe
router.post('/recipe', async(request, response)=>{
    await saveRecipe(request.body)
    .then(res => {
       response.status(200).send(res);
     })
    .catch(err => {
       response.status(500).send(err);
    });
}),
//get all recipes
router.get('/recipe', async(request, response)=>{
    await getRecipe()
    .then(res => {
       response.status(200).send(res);
     })
    .catch(err => {
       response.status(500).send(err);
    });
}),
//get one recioe
router.get('/recipe/:id', async(request, response)=>{
    await getRecipe(request.params.id)
    .then(res => {
       response.status(200).send(res);
     })
    .catch(err => {
       response.status(500).send(err);
    });
}),
//update recipe
router.put('/recipe/:id', async(request, response)=>{
    await updateRecipe(request)
    .then(res => {
       response.status(200).send(res);
     })
    .catch(err => {
       response.status(500).send(err);
    });
}),
//delete recipe
router.put('/delete-recipe/:id', async(request, response)=>{
    await deleteRecipe(request)
    .then(res => {
       response.status(200).send(res);
     })
    .catch(err => {
       response.status(500).send(err);
    });
}),

module.exports = app => app.use(router)