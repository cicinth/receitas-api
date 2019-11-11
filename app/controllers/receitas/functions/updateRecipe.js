const { Receita } = require('../../../models');

async function updateRecipe(request) {
    const body =  request.body 
    const  query  = {
        id: request.params.id,
        active: 1
    } 
    return Receita.update(body, {
        where: query
    }).then(res => {
        return 'Alterado com sucesso'
    }).catch(err => err) 
}

module.exports = updateRecipe;