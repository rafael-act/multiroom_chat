/*importacao do modulo do express*/
const express = require('express');

/*importacao do modulo do consign*/
const consign = require('consign');

/*importacao do modulo do body-parser*/
const bodyParser = require('body-parser');
/*importacao do modulo do express-validator*/   
const expressValidator = require('express-validator');

/*iniciando o objeto do express*/
const app = express();

/*setando as variaveis 'view engine' e 'views' do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*configurando o middleware express.static*/
app.use(express.static('./app/public'));

/*configurando o middleware body-parser*/
app.use(bodyParser.urlencoded({extended: true}));

/*configurando o middleware express-validator*/     
app.use(expressValidator());

/*configurando o consign para autoload das rotas, models e controllers*/    
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/exportando a variavel app para ser utilizada em outros arquivos*/
module.exports = app;