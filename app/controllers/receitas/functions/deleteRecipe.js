const { Receita } = require('../../../models');

async function deleteRecipe(request) {
    const status = {active:0}
    const query  = {
        id: request.params.id,  
        active: 1
    } 
    return Receita.update(status, {
        where: query
    }).then(res => {
        return 'Deletado com sucesso'
    }).catch(err => err) 
}

module.exports = deleteRecipe;