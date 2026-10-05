/*importar configuracoes do servidor*/
const app = require('./config/server.js');

/*parametrizar a porta de escuta*/
 app.listen(3000, function(){
    console.log('Servidor ON');
});