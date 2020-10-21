const app = require('./server');

//listeneng the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})