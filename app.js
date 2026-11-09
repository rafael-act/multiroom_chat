/*importar configuracoes do servidor*/
const app = require('./config/server.js');

/*parametrizar a porta de escuta*/
var server = app.listen(3000, function(){
    console.log('Servidor ON');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
    console.log('Usuario conectou');  
    
    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });

    socket.on('msgParaServidor', function(data){
        /*dialogos*/
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
    });
});

