//Install express server
const express = require('express');
var favicon = require('serve-favicon')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angularapp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/angularapp/index.html'));
});

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
