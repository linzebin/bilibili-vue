import * as express from 'express'


const app = express()

app.set('port', (process.env.PORT || 3000));
// app.use('/', express.static('./dist'));

app.get("/", function (req, res) {
    res.send("Hello linzebingogogo!!");
});

app.listen(app.get('port'), function () {
    console.log('Vuejs fullstack listening on port ' + app.get('port'));
});
