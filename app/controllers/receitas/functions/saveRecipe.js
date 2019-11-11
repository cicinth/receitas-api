const { Receita } = require('../../../models');

async function saveRecipe(recipe) {
    recipe.active =  1
    return Receita.create(recipe)
        .then(res => res)
            .catch(err => err) 
}

module.exports = saveRecipe;