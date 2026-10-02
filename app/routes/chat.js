    module.exports = function(application){ 
        application.post('/chat', function(req, res){
            res.render('chat', { title: 'Express' });
        });

         module.exports = function(application){ 
        application.get('/chat', function(req, res){
            res.render('chat', { title: 'Express' });
        });
    }