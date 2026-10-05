module.exports.iniciaChat = function(application,req,res){
    var dadosForm = req.body;

    console.log(dadosForm);
    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);

    validationErros = req.validationErrors();
    if(validationErros){
        res.render('index', {validacao: validationErros});
        return;
    }
    res.render('chat', { title: 'Express' });
}