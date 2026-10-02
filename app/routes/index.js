    module.exports = function(application){ 
        application.post('/', function(req, res){
            res.render('index', { title: 'Express' });
        });
    }