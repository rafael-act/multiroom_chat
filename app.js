/*importar configuracoes do servidor*/
const app = require('./config/server.js');

/*parametrizar a porta de escuta*/
var server = app.listen(3000, function(){
    console.log('Servidor ON');
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log('Usuario conectou');  
    
    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });
});

