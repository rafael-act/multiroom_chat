module.exports.iniciaChat = function(application,req,res){
    var dadosForm = req.body;
    var apelido = '';

    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);

    validationErros = req.validationErrors();
    if(validationErros){
        res.render('index', {validacao: validationErros});
        return;
    }

    application.get('io').emit('msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'}
    );

    res.render('chat', { title: 'Express' ,dadosForm:dadosForm});
}