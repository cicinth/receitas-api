const { Receita } = require('../../../models');

async function getRecipe(id) {
    const query = {active: 1}
    if(id) query.id = id 
    
    return Receita.findAll({ 
        where: query
     }).then(res => res)
     .catch(err => err) 
}

module.exports = getRecipe;